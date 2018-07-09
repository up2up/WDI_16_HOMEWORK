def convert_temp(tempture, temp_unit)
  tempHash = {}
  if temp_unit == "f"
    celsiusTemp = ( tempture - 32) / 1.8
    kelvinTemp =  ( tempture + 459.67) / 1.8
    tempHash["fahrenheit"] = tempture
    tempHash["Celsius"] = celsiusTemp.round
    tempHash["Kelvin"] = kelvinTemp.round
    
  elsif temp_unit == "c"
    fahrenheitTemp =  tempture * 1.8 + 32
    kelvinTemp = tempture  + 273.15
    tempHash["Celsius"] = tempture
    tempHash["fahrenheit"] = fahrenheitTemp.round(2)
    tempHash["Kelvin"] = kelvinTemp.round(2)

  else
    celsiusTemp = tempture - 273.15
    fahrenheitTemp = tempture * 1.8 - 459.67
    tempHash["Kelvin"] = tempture
    tempHash["Celsius"] = celsiusTemp.round
    tempHash["fahrenheit"] = fahrenheitTemp.round
  end
  formatOutput tempHash
end

def formatOutput temptureHash
  keys = temptureHash.keys
  puts "#{keys[0]}: #{temptureHash[keys[0]]} \n to #{keys[1]}: #{temptureHash[keys[1]]}\n to #{keys[2]}: #{temptureHash[keys[2]]}"
end

puts "Enter a tempture OR quit the program"
temp = gets.chomp
while temp != "quit"
  puts "what is a tempture unit"
  unit = gets.chomp.downcase
  temp = temp.to_i
  convert_temp(temp, unit)
  puts "Enter a tempture OR quit the program"
  temp = gets.chomp
end