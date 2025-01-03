from functools import reduce
def square_sum(numbers):
    if not numbers:
        return 0
    return reduce(lambda x, y: x + y**2, numbers)
    return 0 if not numbers else reduce(lambda x, y: x + y**2, numbers, 0)

