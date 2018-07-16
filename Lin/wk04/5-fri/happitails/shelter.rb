# frozen_string_literal: true

require_relative 'animal'
require_relative 'client'

class Shelter
  def initialize
    @clients = []
    @animals = []
  end

  def clients=(client)
    @clients << client
  end

  def animals=(animal)
    @animals << animal
  end

  attr_reader :clients

  attr_reader :animals

  def to_s
    # check animals and clients are not empty
    "#{animals.length} animals in the Shelter. They are (#{animals.map(&:name).join(', ')}).\n#{clients.length} clients in the Shelter. They are (#{clients.map(&:name).join(', ')})."
  end

  def create_an_animal(animal_name, animal_age, animal_gender, animal_species, animal_toys)
    animal = Animal.new(animal_name, animal_age, animal_gender, animal_species, animal_toys)
  rescue StandardError
    puts "Could not create new animal #{animal.name}."
  else
    puts "#{animal.name} is added to the shelter."
    animal
  end

  def create_an_client(client_name, client_num_of_children, client_age, client_pets)
    client = Client.new(client_name, client_num_of_children, client_age, client_pets)
  rescue StandardError
    puts "Could not create new cllient #{client.name}"
  else
    puts "#{client.name} is added to the shelter."
    client
  end

  def show_all_animals
    @animals.each do |animal|
      if animal.toys.empty?
        puts "#{animal.name} is #{animal.age} years old #{animal.gender} #{animal.species}."
      else
        puts "#{animal.name} is #{animal.age} years old #{animal.gender} #{animal.species} having toys #{animal.toys.join(' ')}."
      end
    end
  end

  def show_all_clients
    @clients.each do |client|
      if client.pets.empty?
        puts "#{client.name} is #{client.age} years old have #{client.num_of_children} kids with no pet."
      else
        pets_name = client.pets.map(&:name).join(',')
        puts "#{client.name} is #{client.age} years old have #{client.num_of_children} kids with pet named #{pets_name}."
      end
    end
  end

  def isAnimal_in_shelter(animal_name)
    @animals.include? @animals.select { |animal| animal.name == animal_name }.pop
  end

  def isClient_in_shelter(client_name)
    @clients.include? @clients.select { |client| client.name == client_name }.pop
  end

  def isClient_has_pets(client_name)
    @clients.select { |client| client.name == client_name }.pop.pets.empty? ? false : true
  end

  def isClient_apopt_animal(client_name, animal_name)
    @clients.each do |client|
      next unless client.name == client_name
      client.pets.each do |pet|
        if pet.name == animal_name
          return true
        else
          return false
        end
      end
    end
  end

  def adopt_animal(client_name, animal_name)
    adopt_client = @clients.select { |client| client.name == client_name }.first
    adopt_animal = @animals.select { |animal| animal.name == animal_name }.first
    adopt_client.add_pet(adopt_animal)
    @animals.delete(adopt_animal)
  end

  def return_adopt_animal(client_name, animal_name)
    adopt_client = @clients.select { |client| client.name == client_name }.first
    return_animal = adopt_client.pets.select { |animal| animal.name == animal_name }.first
    adopt_client.remove_pet(return_animal)
    @animals << return_animal
  end
end
