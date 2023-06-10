
# find L.C.F. of two numbers

# lowest common factors of two number
#  6, 12 -> 2 * 3, 2 * 2 * 3 -> 6
#  10, 15 -> 2 * 5, 3 * 5 -> 5


# 'FOR' loop  (ANSWER IS WRONG,not the RIGHT working)

n1 = 6
n2 = 12

lcf = 1
for i in range(2, n1):
    if (n1 % i == 0) and (n2 % i == 0):
        lcf *= i


print(f"{n1} and {n2} LCF is {lcf}")

# 'WHILE' loop, correct writing of code

n1 = 72
n2 = 18

lcf = 1
n = 2
num1 = n1
num2 = n2
while True:
    print(num1, n1, num2, n2)
    if (num1 % n == 0) and (num2 % n == 0):
        lcf *= n
        num1 /= n
        num2 /= n
    else:
        n += 1

    if n >= n1:
        break


print(f"{n1} and {n2} LCF is {lcf}")

# euclidean algorithm

n1 = 72
n2 = 18

lcf = 1
n = 2

def euclidean_algorithm(a, b):
    while b != 0:
        a, b = b, a % b
    return a


print(f"{n1} and {n2} LCF is {euclidean_algorithm(n1,n2)}")



