a = ["Anil", "Erik", "Jonathan"]
a[1]
a.push("Lin")

h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
h[1]
h[:two]
h["two"]
h[3] = "Three"
h[:four] = 4

is = {true => "It's true!", false => "It's false"}
# What is the return value of is[2 + 2 == 4]
# It's true!
# What is the return value of is["Erik" == "Jonathan"]?
# "It's false"
# What is the return value of is[9 > 10]?
# "It's false"
# What is the return value of is[0]?
# "It's false" nil
# What is the return value of is["Erik"]?
# nil

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}
# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
users["Jonathan"][:twitter]
# How would you add the number 7 to Erik's favorite numbers?
users["Erik"][:favorite_numbers].push(7)
# How would you add yourself to the users hash?
users["Lin"]={}
users["Lin"][:twitter] = "polarbear"
users["Lin"][:favorite_numbers] = [3, 5, 8, 10]
# How would you return the array of Erik's favorite numbers?
users["Erik"][:favorite_numbers]
# How would you return the smallest of Erik's favorite numbers?
users["Erik"][:favorite_numbers].min
# How would you return an array of Anil's favorite numbers that are also even?
users["Anil"][:favorite_numbers].select { |i| i.even? }
# How would you return an array of the favorite numbers common to all users?
result = users.values.map {|i| i[:favorite_numbers]}.reduce {|unique, num_arr| unique & num_arr}
# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
users.values.map {|i| i[:favorite_numbers]}.reduce {|one_arr, num_arr| one_arr + num_arr}.uniq.sort

