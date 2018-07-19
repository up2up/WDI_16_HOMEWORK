class Robot
  @@name_call = 0
  @@reset_call = 0

  def initialize
    @born = Time.now
    @last_boot_at = 0
    @name =generate_string + generate_num
  end
  def generate_string
    Array.new(2){Array('A'..'Z').sample}.join
  end

  def generate_num
    str_num = ""
    3.times do
      str_num += (rand 10).to_s
    end
    str_num
  end
  

  def name
    @@name_call += 1 
    @name
  end

  def reset
    @@reset_call += 1
    @last_boot_at = Time.now
    @name =generate_string + generate_num
  end

  def instruction_count
    @instruction_count = @@name_call + @@reset_call
  end

  def timers
    @time_since_create = Time.now - @born
    @time_since_last_reset = Time.now - @last_boot_at
    "#{@time_since_last_reset} seconds since last boot, #{@time_since_create} seconds since creation"
  end

end

# puts "Robot 1: "
# robot1 = Robot.new
# puts robot1.name
# puts robot1.name
# puts robot1.name

# puts "Robot 2: "
# robot2 = Robot.new
# puts robot2.name
# puts robot2.name
# puts robot2.name

# puts "Robot 3: "
# robot3 = Robot.new
# puts robot3.name
# puts robot3.name
# puts "Resetting to factory settings."
# robot3.reset
# puts robot3.name
# puts robot3.name
# puts robot3.instruction_count




puts "Robot 3: "
robot3 = Robot.new
puts robot3.timers # => "21 seconds since last boot, 21 seconds since creation"
puts robot3.name
puts "Resetting to factory settings."
robot3.reset
puts robot3.timers # => "8 seconds since last boot, 29 seconds since creation"
puts robot3.name

require 'pry'
binding pry