export const squareSum = (numbers :Array<number>) => numbers.length == 0 ? 0 : numbers.map( e => Math.pow(e,2)).reduce((total, num) => total += num)
