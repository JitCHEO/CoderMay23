# double check if controller folder, users_controller have an 's' behind the controller or not

from controllers.users_controllers import users
from controllers.tasks_controllers import tasks

registered_controllers = (
    users,
    tasks
)
