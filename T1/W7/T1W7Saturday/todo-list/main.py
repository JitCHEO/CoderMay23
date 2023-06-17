# A simple application that allows users to manage their to-do lists. Users can add tasks, mark them as completed, and remove tasks from the list.

from clear import clear_terminal

# a way to store all the information
tasks = {
    "task 1": False, # name is the key and mark is the value
    "task 2": False,
    "task 3": True,
    "task 4": False,
}

# functions
def print_options():
    clear_terminal()

    print("""
    Todo List options

    Enter options from the list below

    [1] List all tasks
    [2] Add new task
    [3] Remove task
    [4] Mark task as completed
    [Enter anything else to exit..]
    """)

def list_tasks():
    clear_terminal()
    print("----------Your Tasks-----------")
    for name, _ in tasks.items():
        print(get_task(name))
    input("press enter to continue....")

def remove_task():
    print("remove task")
    input("press enter to continue....")

def add_task():
    print("add task")
    input("press enter to continue....")

def mark_task():
    print("mark task")
    input("press enter to continue....")

def get_task(name):
    if tasks[name]:
        return f"'{name}' - (x)"

    return f"'{name}' - (√)"

# functions ended

# run our application
# present user with an option
# to get input from the user
# perform operation if needed
while True:
    print_options()

    option = int(input("Enter your selection> "))

    match option:
        case 1:
            list_tasks()
        case 2:
            add_task()
        case 3:
            remove_task()
        case 4:
            mark_task()
        case _:
            break

print("Application closed")

# error handling





