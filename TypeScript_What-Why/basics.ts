// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = 'Heather';

let isInstructor: boolean;

isInstructor = true;

// Complex Types

// array
let hobbies: string[];

hobbies = ['Reading', 'Coding'];

// object
let person: {
    name: string;
    age: number;
};

person = {
    name: 'Heather',
    age: 37
};

// you can also do both
let people: {
    name: string;
    age: number;
}[];

// Type Inference

let course = 'React - The Complete Guide'; // if you immediately declare and initialize a variable, TypeScript will infer the type

// course = 12341; // does not work because course is inferred to be a string

// Union Types

let course2: string | number = 'React - The Complete Guide';

course2 = 12341; // works because course2 is a string OR a number

// Type Aliases

// declare your type once and use it in multiple places without having to retype it
type Person = {
    name: string;
    age: number;
};

let person2: Person;
let people2: Person[];

// Functions & Types

function add(a: number, b: number) {
    return a + b; // TypeScript will infer that the return type is a number because of the types set for a and b
}

function print(value: any) {
    console.log(value);
}
// this function does not have a return statement and therefore it has a special return type called void. Void is basically comparable to null and undefined, but it's only used in conjunction with functions. It means that the function never returns anything.

// Generics

function insertAtBeginning(array: any[], value: any) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

// with a generics feature, we can convert this function to a generic funciton using <>. In here we can define a generic type which will only be available inside this function. Typically that's called T for type, but any identifier of your choice is okay.

function insertAtBeginning2<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

// now we can use this function with any type of array and any type of value, but they must be the same type.

// Classes

class Student {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];

    constructor(
        public firstName: string, 
        public lastName: string, 
        public age: number, 
        private courses: string[]
        ) {} // this is a shortcut to create properties and assign values to them


// you can also add a method to a class: method shorthand notation
    enrol(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice(); // slice() is a method that returns a copy of the array
    }
}

const student = new Student('Heather', 'Slape', 37, ['React', 'Node']);
student.enrol('Angular');

// with TypeScript you can determine whether a property is public (can be accessed outside of the class) or private (can only be accessed inside the class).By default all properties are public. Simply add 'private' in front of the property name.

// Interfaces

// interfaces are a TypeScript feature that allows you to define the structure of an object. It's basically a blueprint for an object.

interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

let heather: Human;

heather = {
    firstName: 'Heather',
    age: 37,

    greet() {
        console.log('Hello!');
    }
};

// interfaces can be implemented by classes. This means that a class can implement an interface and then it must fulfill the structure of that interface. This is a way to make sure that a class has a certain structure.

class Instructor implements Human {
    firstName: string;
    age: number;

    greet() {
        console.log('Hello!');
    }
}

// not sure why I'm getting an error with the firstName and age properties in the Instructor?