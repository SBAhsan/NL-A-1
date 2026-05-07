//solution 1:
const filterEvenNumbers = (...nums: number[]) => {
    return nums.filter(num => num % 2 === 0);
}

const filtered = filterEvenNumbers(1, 2, 3, 4, 5, 6);

console.log(filtered);



