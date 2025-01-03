const squareSum = (numbers) => numbers.length == 0 ? 0 : numbers.map( e => e * e).reduce((total, num) => total += num)

