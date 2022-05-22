export {};

// Primitives : number,string,boolean
// More complex : array,object
// Function types, parameters

/****** PRIMITIVES ******/

let age: number = 12;
let userName: string = "Max";
let isInstructor: boolean = true;

/****** COMPLEX TYPES ******/
let hobbies: string[];

hobbies.push("Cooking", "Sports");

// type alias
type Person = {
	name: string;
	age: number;
};

let person: Person;

person = {
	name: "Max",
	age: 12,
};

let people: Person[];

// Union types
let course: string | number = "Angular";
course = 12345;

// functions
function add(a: number, b: number): number {
	return a + b;
}

function printOutput(value: any) {
	console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
	const newArray = [value, ...array];
	return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a", "b", "c"], "d");
