puts "Enter filename:"
fileName = gets.chomp

totalline = 0
File.open(fileName).each do
  totalline +=1
end

puts "#{totalline} line(s)"