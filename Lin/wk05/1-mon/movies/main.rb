require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :index
end

get '/movies' do
  api_key = '2f6435d9'
  title = params[:title]
  @movie = HTTParty.get("http://omdbapi.com/?t=#{title}&apikey=#{api_key}")

  if @movie.success?
    @movie_response = @movie['Response']
    @movie_title = @movie['Title']
    @movie_year = @movie['Year']
    @movies_poster = @movie['Poster']
    @movies_director = @movie['Director']
  else
    raise @movie.response
  end
  erb(:movie)
end

get '/about' do
  erb(:about)
end