
# why do we need loop


# iterate or iteration
for i in range(100):
    print("hello")



# WHILE LOOP

i = 0
while i < 100:
    i += 1
    print("hello", i)


# BREAK


#  EXAMPLE 1
i = 0
while True:
    if i == 100:
        break

    i += 1
    print("hello", i)



# EXAMPLE 2
i = 0
while True:
    i += 1

    if i == 100:
        break

# will not execute this 'continue' statement
    if i == 50:
        continue 
    

    print("hello", i)


# EXAMPLE 3

# bank account 100 dollar -> debit 10
# updated bank balance 90

# credit 10
# updated bank balance

# get balance

balance = 100

while True:
    bal = int(input("enter the value that needs to be credit or debit> "))

    if bal == 0:
        print("Your balance is ", balance)
    else:
        balance += bal
        print("Your balance is ", balance)


    if balance < 0:
        print("not sufficient balance exit")
        break

# ABOVE example without 'continue' BUT just 'break'
# BELOW example show 'continue'

balance = 100

while True:
    bal = int(input("enter the value that needs to be credit or debit> "))

    print("Your current balance is ", balance)

    if bal == 0:
        continue

    if bal != 0:
        balance += bal
        
    print("Your updated balance is ", balance)

    if balance < 0:
        print("not sufficient balance exit")
        break

# AS ABOVE BUT CLEANER CODE and without 'continue'


balance = 100

while True:
    bal = int(input("enter the value that needs to be credit or debit> "))

    if bal == 0:
        print("Your current balance is ", balance)
    else:
        balance += bal
        print("Your updated balance is ", balance)


    if balance < 0:
        print("not sufficient balance exit")
        break


