//solution 1:
const filterEvenNumbers = (...nums: number[]) => {
    return nums.filter(num => num % 2 === 0);
}

filterEvenNumbers(1, 2, 3, 4, 5, 6);


//solution 2:
const reverseString = (word: string) => {
    return word.split('').reverse().join('');
}

reverseString('typescript');


//solution 3:
type StringOrNumber = string | number

const checkType = (input: StringOrNumber) => {
    if(typeof input === 'string'){
        return ('String');
    }
    else if(typeof input === 'number'){
        return ('Number');
    }
}

checkType('Hello');
checkType(42);



//solution 4:
const getProperty = <T, K extends keyof T>(obj:T, key: K) : T[K] => {
    return obj[key];
}

const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, 'name');



//solution 5:
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

toggleReadStatus(myBook);




//solution 6:
class Person{
    name: string;
    age: number;

    constructor(_name: string, _age: number){
        this.name = _name;
        this.age = _age;
    }
}

class Student extends Person{
    grade: string;

    constructor(_name: string, _age: number, _grade: string){
        super(_name, _age);

        this.grade = _grade;
    }

    getDetails(){
        return (`"Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}";`);
    }
}


const student = new Student("Alice", 20, "A");
student.getDetails();




//solution 7:
const getIntersection = (arr1: number[], arr2: number[]) => {
    const newArr: number[] = arr1.filter(i => arr2.includes(i));

    return newArr;
}

getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);