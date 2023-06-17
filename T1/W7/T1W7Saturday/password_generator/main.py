from string import ascii_letters, digits
from random import choice
# password generator
# to create a strong password
# length of the password
# uppercase lowercase string.ascii_letters
# numbers string.digits
# symbols (_, .)

# get length of the password as an input from the user
password_length = int(input("Enter password length> "))

# constant containing valid password characters
valid_characters = ascii_letters + digits + "_."

# create a variable to save password
password = ""

# iterate on the length of the password to get random character
for i in range(password_length):
    password += choice(valid_characters)

# display password
print(password)
