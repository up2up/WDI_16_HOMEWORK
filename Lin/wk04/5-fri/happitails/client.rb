# frozen_string_literal: true

class Client
  attr_accessor :name, :age, :num_of_children, :pets

  def initialize(name, num_of_children, age, pets)
    self.name = name
    self.num_of_children = num_of_children
    self.age = age
    self.pets = pets
  end

  def add_pet(pet)
    self.pets << pet
  end

  def remove_pet(pet)
    self.pets.delete(pet)
  end
end
