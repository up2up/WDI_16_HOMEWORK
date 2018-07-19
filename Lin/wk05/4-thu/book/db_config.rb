require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'bookstore'
}

ActiveRecord::Base.establish_connection(options)