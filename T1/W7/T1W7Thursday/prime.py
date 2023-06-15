

# 100th prime number

# write a function which checks prim number
def is_prime(n):
    # iterate the from 1 to n
    for i in range(2,n):
        # check and return false when remainder is 0
        if n % i == 0:
            # return false if the remainder is 0
            return False

    # return true if the loop finishes
    return True

# save a variable with a value 100
nth_prime = 1
current = 2

# iterate or loop for 100th time
while True:
    current += 1

    # check for a prime
    if is_prime(current):
        nth_prime += 1

    # check whether the prime is 100th number
    if nth_prime == 100:
        # print
        print(f"100th prime number is {current}")
        break

