require 'sinatra'
require 'sinatra/reloader'

get '/' do
  @num_bottles=98
  erb(:index)
end

get '/0' do
  erb(:zero)
end

get '/:num_bottles' do
    @num_bottles = params[:num_bottles].to_i
    erb(:num_bottles)
end
