# frozen_string_literal: true

class Animal
  attr_accessor :name, :age, :gender, :species, :toys

  def initialize(name, age, gender, species, toys)
    self.name = name
    self.age = age
    self.gender = gender
    self.species = species
    self.toys = toys
  end

  def add_toys(toy)
    self.toys << toy
  end

end
