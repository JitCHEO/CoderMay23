

# approach for car example
# a student with attributes like name, age, and major

car = ["red", 2.4, 4, "petrol"] # [color, engine size, passenger, fuel type](disadvantage cause u will need to rewrite a notes on the
                                # side and is not clear)

car = {
    "color": "red",
    "engine_size": 2.4,
    "passenger": 4,
    "fuel_type": "petrol"
}


def same_car(car_model):
    return car_model

marcus_car = same_car(car)
marcus_car["color"] = 'blue'

print(marcus_car)
