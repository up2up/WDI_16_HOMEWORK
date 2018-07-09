puts "Enter filename:"
fileName = gets.chomp

total_line = 0
File.open(fileName).each do |line|
  total_line +=1
end

puts "#{total_line} line(s)"