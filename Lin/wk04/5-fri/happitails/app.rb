# frozen_string_literal: true

require_relative 'shelter'

animal_adopt_shelter = Shelter.new
animal_adopt_shelter.animals = animal_adopt_shelter.create_an_animal('tommy', 1, 'boy', 'shorthair', [])
animal_adopt_shelter.animals = animal_adopt_shelter.create_an_animal('kitty', 3, 'girl', 'shorthair', [])
animal_adopt_shelter.clients = animal_adopt_shelter.create_an_client('lin', 1, 30, [])

loop do
  puts "\n Selet the follow options
  1. display all animals
  2. display all clients
  3. create an animal
  4. create an client
  5. facilitate client adopts an animal
  6. facilitate client puts an animal up for adoption"

  case gets.chomp
  when '1'
    if animal_adopt_shelter.animals.empty?
      puts 'No animal! Go back to menu!'
    else
      animal_adopt_shelter.show_all_animals
    end

  when '2'
    if animal_adopt_shelter.clients.empty?
      puts 'No clients! Go back to menu!'
    else
      animal_adopt_shelter.show_all_clients
    end

  when '3'
    puts 'what is an animal name?'
    name = gets.chomp
    puts 'what is an animal age?'
    age = gets.chomp
    puts 'what is an animal gender?'
    gender = gets.chomp
    puts 'what is an animal species?'
    species = gets.chomp
    puts 'Does this animal have any toys?(y/n)'
    # need to check if answer is not y/n
    answer = gets.chomp.strip.downcase
    if answer == 'n'
      animal_adopt_shelter.animals = animal_adopt_shelter.create_an_animal(name, age, gender, species, [])
    elsif answer == 'y'
      puts 'what are toys, enter them seperate by space?'
      toys = gets.chomp.split(' ')
      animal_adopt_shelter.animals = animal_adopt_shelter.create_an_animal(name, age, gender, species, toys)
    end

  when '4'
    puts "what is a client's name?"
    name = gets.chomp
    puts "what is a cleint's age?"
    age = gets.chomp
    puts 'How many childrens does client have?'
    num_of_children = gets.chomp
    animal_adopt_shelter.clients = animal_adopt_shelter.create_an_client(name, num_of_children, age, [])

  when '5'
    puts "what is client's name?"
    client = gets.chomp
    if animal_adopt_shelter.isClient_in_shelter(client)
      puts "what is pet's name?"
      animal = gets.chomp
      if animal_adopt_shelter.isAnimal_in_shelter(animal)
        animal_adopt_shelter.adopt_animal(client, animal)
        puts "#{client} has successfully adopted #{animal}.\nHere is animals and clients in the shelter.\n#{animal_adopt_shelter}"
      else
        puts 'This animal is not in our shelter. Add this animal to shelter first.'
      end
    else
      puts 'This client is not in our database. Add this client to shelter first.'
    end

  when '6'
    puts "what is client's name?"
    client_name = gets.chomp
    if animal_adopt_shelter.isClient_in_shelter(client_name) && animal_adopt_shelter.isClient_has_pets(client_name)
      puts "what is pet's name?"
      animal_name = gets.chomp
        if animal_adopt_shelter.isClient_apopt_animal(client_name, animal_name)
          animal_adopt_shelter.return_adopt_animal(client_name, animal_name)
          puts "#{animal_name} has return to shelter.\nHere is animals and clients in the shelter.\n#{animal_adopt_shelter}"
        else
          puts "#{client_name} do not have this pet."
        end
    else
        puts "This client is not in our database or This client has no pet! Enter another client's name"
    end
  
  when 'exit'
    exit
  else
    puts "Make selection from the menu!"
  end
end