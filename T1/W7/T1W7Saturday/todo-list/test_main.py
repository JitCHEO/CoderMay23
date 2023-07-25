import pytest
import main

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