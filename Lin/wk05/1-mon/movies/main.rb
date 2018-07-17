# frozen_string_literal: true

require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

def OMDb_response(endpoint, search_term)
  api_key = '2f6435d9'
  url = "http://omdbapi.com/?apikey=#{api_key}&#{endpoint}=#{search_term}"
  HTTParty.get(url)
end

def save_search_hisotry history
  if !File.exist?("search_history.txt")
    File.open("search_history.txt", "w") do |f|     
      f.write("#{history}\n") 
    end
  else
    File.open('search_history.txt', 'a') do |f|
      f << "#{history}\n"
    end
  end
end
get '/' do
  erb :index
end

get '/results' do
  search_words = params[:search_term]
  save_search_hisotry search_words
  @results = OMDb_response 's', search_words
  if @results['totalResults'].to_i > 1
    @movies = @results['Search']
    erb :results
  else
    redirect "/movies/#{URI.encode(search_words)}"
  end
end

get '/movies/:movie' do
  title = params[:movie]
  @movie = OMDb_response 't', title
  if @movie.success?
    @movie_response = @movie['Response']
    @movie_title = @movie['Title']
    @movie_year = @movie['Year']
    @movies_poster = @movie['Poster']
    @movies_director = @movie['Director']
    @movies_writer = @movie['Writer']
  else
    raise @movie.response
  end
  erb :movie
end

get '/history' do
  @history_file = File.open("search_history.txt","r")
  erb :history
  # @history_file.close
end

get '/about' do
  erb :about
end
