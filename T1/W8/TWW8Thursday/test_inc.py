
def inc(x):
    return x + 1


def test_correct_answer():
    assert inc(4) == 5


def test_incorrect_answer():
    assert inc(3) != 5
