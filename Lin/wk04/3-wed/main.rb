require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'

def request_to_stock (stock_code)
  stock = StockQuote::Stock.quote(stock_code)
end

get '/' do
  stock = request_to_stock ("#{params[:stock]}")
  @company_name = stock.company_name
  @high_price = stock.high
  @low_price = stock.low
  @latest_price = stock.latest_price
  erb(:index)
end

get '/about' do
  erb(:about)
end
