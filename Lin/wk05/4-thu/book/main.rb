     
require 'sinatra'
require 'sinatra/reloader'
require_relative 'db_config'
require_relative 'models/book'


get '/' do
  @books = Book.all
  erb :index
end

get '/books/new' do
  erb :new
end

get '/books/:id' do
  @book = Book.find(params[:id])
  erb :book_details
end

post '/book' do
  book = Book.new
  book.title = params[:title]
  book.isbn = params[:isbn]
  book.authors = params[:authors]
  book.publisher = params[:publisher]
  book.save
  redirect '/'
end

delete '/books/:id' do
  book = Book.find(params[:id])
  book.destroy
  redirect '/'
end

get '/books/:id/edit' do
  @book = Book.find(params[:id])
  erb :edit
end

put '/books/:id' do
  book = Book.find(params[:id])
  book.title = params[:title]
  book.isbn = params[:isbn]
  book.authors = params[:authors]
  book.publisher = params[:publisher]
  book.save
  redirect '/'
end


