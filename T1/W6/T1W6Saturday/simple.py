
# input and output
s = input("Enter your marks in portfolio assignment (95)> ")
print("Hello!", type(s))


# pythin 3.6 and above string format method
teacher = "akash"
student = "dillon"

sen = f"{teacher} is a teacher in coder academy, {student} is a student in may batch"
# sen = "{} is a teacher in coder academy, {} is a student in may batch".format(teacher, student) older python version

print(sen)



# TYPE CONVERSION

s1 = int(input("Enter your marks in portfolio assignment (95)> "))
print("Hello!", type(s1), s1)
s2 = int(input("Enter your marks in portfolio assignment (95)> "))
print("Hello!", type(s2), s2)

s3 = s1 + s2
print("Hello!", type(s3), s3)

# Answer is 30 because of wrapping it in 'int'

s1 = input("Enter your marks in portfolio assignment (95)> ")
print("Hello!", type(s1), s1)
s2 = input("Enter your marks in portfolio assignment (95)> ")
print("Hello!", type(s2), s2)

s3 = s1 + s2
print("Hello!", type(s3), s3)

# Answer is 1020 because is a string 

