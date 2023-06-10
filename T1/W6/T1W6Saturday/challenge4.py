
# calculate Factorial

# 5 -> 5 * 4 * 3 * 2 * 1
# integer
# positive

n = 5
factorial = 1
for i in range(1, n + 1):
    factorial *= i


print("factorial of a number {} is {}".format(n, factorial))


# SAME EXAMPLE with 'while' loop

n = 15
factorial = 1

num = n
while num > 0:
    factorial *= num
    num -= 1


print("factorial of a number {} is {}".format(n, factorial))

# IF number = 0

n = 0
factorial = 1

num = n
while num >= 0:
    if num == 0:
        factorial *= 1
        break
    else:
        factorial *= num
        num -= 1

print("factorial of a number {} is {}".format(n, factorial))
