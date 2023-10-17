from main import ma
from marshmallow import fields

class TaskSchema(ma.Schema):
    class Meta:
        fields = (
            "id",
            "name",
            "description",
            "due_date",
            "completed_at",
            "user",
        )

    user = fields.Nested("UserSchema", exclude=("tasks",))


task_schema = TaskSchema()
tasks_schema = TaskSchema(many=True)






# circular dependency
# file 1 -> file 2
# file 2 -> file 1 (file 2 reference to file 1)(will wait till the top is fulfill)
