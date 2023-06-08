### String method

- len(): Returns the length of a string.
- lower(): Converts a string to lowercase.
- upper(): Converts a string to uppercase.
- split(): Splits a string into a list of substrings based on a delimiter.
- join(): Concatenates a list of strings into a single string using a specified separator.

### If_else

- Check if a number is positive or negative
- Determine if a person is eligible to vote
- Check if a number is even or odd
- Check if a year is a leap year
- Determine the grade based on a student's score

lukas = 0
#### ( <40, <60, <80, <90, <95, > 95)

if(lukas < 40):
    print("lucas failed!")
elif(lukas < 60):
    print("lucas scored grade D")
elif(lukas < 80):
    print("lucas scored grade C")
elif(lukas < 90):
    print("lucas scored grade B")
elif(lukas < 95):
    print("lucas scored grade A")
else:
    print("lucas scored grade A+")


### Arithmetic and logical operator in python
- arithmetic => *, %, /, +, -, **
- binary => or, and
- unary => not

### Match Case
- Cleaner instead of using else_if

 v = "cb"

 match(v):
     case "a":
         print("apple")
     case "b":
         print("banana")
     case _:
         print("kiwi")

### Range

-  Determine the grade based on a student's score

lukas = 10
#### ( <40, <60, <80, <90, <95, > 95)

match (lukas):
    case range(40):
        print("lucas failed!")
    case range(40, 60):
        print("lucas scored grade D")
    case range(60, 80):
        print("lucas scored grade C")
    case range(80, 90):
        print("lucas scored grade B")
    case range(90, 95):
        print("lucas scored grade A")
    case _:
        print("lucas scored grade A+")
