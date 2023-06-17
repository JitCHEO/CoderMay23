# valid_password example with import re.search Pyrex?(check with ReGex)

from string import ascii_letters, digits, ascii_lowercase, ascii_uppercase
from random import choice
from re import search
# password generator
# to create a strong password
# length of the password
# uppercase lowercase string.ascii_letters
# numbers string.digits
# symbols (_, .)

# get length of the password as an input from the user
password_length = int(input("Enter password length> "))


def password_combination(password_length):
    if password_length <= 6:
        return

    # constant containing valid password characters
    valid_characters = ascii_letters + digits + "_."

    # create a variable to save password
    password = ""

    # iterate on the length of the password to get random character
    for i in range(password_length):
        password += choice(valid_characters)

    return password

def valid_password(password):
    if not password:
        return False

    # using regular expression
    has_uppercase = bool(search(r'[A-Z]', password))
    has_lowercase = bool(search(r'[a-z]', password))
    has_digit = bool(search(r'[0-9]', password))
    has_punctuations = bool(search(r'[_|.]', password))

    if has_uppercase and has_lowercase and has_digit and has_punctuations:
        return True

    else:
        print("password is not valid", password)
        return False

# display password
# print(generate_password(password_length))
gen = password_combination(password_length)
valid = valid_password(gen)
print(valid, gen)
