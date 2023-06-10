# check whether a given string is a palindrome or not
# madam, civic, racecar(back to front or front to back are still the same)



# SHORTCUT

word = "nitin"

print(word == word[::-1])

# [begin:end:direction ](meaning for the syntax as above)

# LONGCUT( FALSE cause the word is AKASH instead of CIVIC)

word = "akash"

emp = ""

for i in word:
    emp = i + emp


print(emp == word)


