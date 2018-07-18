# frozen_string_literal: true

require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pg'

def OMDb_response(endpoint, search_term)
  api_key = '2f6435d9'
  url = "http://omdbapi.com/?apikey=#{api_key}&#{endpoint}=#{search_term}"
  HTTParty.get(url)
end

def save_search_hisotry history
  if !File.exist?('search_history.txt')
    File.open('search_history.txt', 'w') do |f|
      f.write("#{history}\n")
    end
  else
    File.open('search_history.txt', 'a') do |f|
      f << "#{history}\n"
    end
  end
end

def run_sql sql
  conn = PG.connect(dbname: 'omdb')
  result = conn.exec(sql)
  conn.close
  result
end

def is_call_DB id
  run_sql "SELECT * FROM movies where imdbID ='#{id}';"
end

get '/' do
  erb :index
end

get '/results' do
  search_words = params[:search_term]

  save_search_hisotry search_words
  
  @results = OMDb_response 's', search_words
  if @results["Response"] == "True"
    if @results['totalResults'].to_i > 1
      @movies = @results['Search']
      erb :results
    else
      redirect "/movies/#{URI.encode(@results['Search'].first['imdbID'])}"
    end
  end
  erb :results
end

get '/movies/:movieid' do
  movie_id = params[:movieid]

  result = is_call_DB movie_id
  if result.count != 0
    @movie = result.first
    @movie_response = "True"
    @movie_title = @movie['title']
    @movie_imdbID = @movie['imdbid']
    @movie_year = @movie['year']
    @movies_poster = @movie['poster']
    @movies_director = @movie['director']
    @movies_writer = @movie['writer']
  else
    @movie = OMDb_response 'i', movie_id
    if @movie.success?
      @movie_response = @movie['Response']
      @movie_title = @movie['Title']
      @movie_year = @movie['Year']
      @movies_poster = @movie['Poster']
      @movies_director = @movie['Director']
      @movies_writer = @movie['Writer']
      run_sql "INSERT INTO movies (title, year, poster, director, writer, imdbID) values ('#{@movie['Title']}','#{@movie['Year']}','#{@movie['Poster']}','#{@movie['Director']}','#{@movie['Writer']}','#{@movie['imdbID']}');"
    else
      raise @movie.response
    end
  end
  erb :movie
end

get '/history' do
  @history_file = File.open('search_history.txt', 'r') if File.exist?('search_history.txt')
  erb :history
end

get '/about' do
  erb :about
end
