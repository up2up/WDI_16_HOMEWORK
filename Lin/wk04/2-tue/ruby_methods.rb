# frozen_string_literal: true

def lengths(str_arr)
  len_arr = []
  str_arr.each { |str| len_arr << str.length }
  len_arr
end

words = %w[hello what is up dude]
lengths(words)

def transmogrifier(num1, num2, num3)
  (num1 * num2)**num3
end

def toonify(accent, sentence)
  if accent == 'daffy'
    sentence.tr('s', 'th')
  elsif accent == 'elmer'
    sentence.tr('r', 'w')
  else
    sentence
  end
end

def letter_reverse(sentence)
  sentence.split(' ').map(&:reverse).join(' ')
end

def longest(str_arr)
  word_len_arr = []
  str_arr.each { |word| word_len_arr << word.length }
  str_arr.select {|word| word.length == word_len_arr.max}
end