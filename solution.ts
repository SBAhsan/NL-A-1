//solution 1:
const filterEvenNumbers = (...nums: number[]) => {
    return nums.filter(num => num % 2 === 0);
}

const filtered = filterEvenNumbers(1, 2, 3, 4, 5, 6);
// console.log(filtered);


//solution 2:
const reverseString = (word: string) => {
    return word.split('').reverse().join('');
}

const reversed = reverseString('typescript');
// console.log(reversed);


//solution 3:
type StringOrNumber = string | number

const checkType = (input: StringOrNumber) => {
    if(typeof input === 'string'){
        console.log('String');
    }
    else if(typeof input === 'number'){
        console.log('Number');
    }
}

// checkType('Hello');
// checkType(42);


//solution 4:
interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

const myBook = {
    title: 'TypeScript Guide',
    author: 'Jane Doe',
    publishedYear: 2024
}

const toggleReadStatus = (book: Book) => {
    return {...book, isRead: true};
}

const readBook = toggleReadStatus(myBook);
console.log(readBook);