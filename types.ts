/* Testin */
// console.log("Hello from ts");

let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

// // Setting array
// let strArr: string[];
// let numArr: number[];
// let boolArr: boolean[];

// Setting array in another way
let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

// Tuple
let strNumTuple: [string, number];

// void Null undefined
let myVoid: void = null;
let myNull: null = null;
let myUndefined: undefined = undefined;


myString = "Hello".slice(0, 3);
myNum = 1;
myBool = true;
myVar = 5;

strArr = ["hello", 'Michael'];
numArr = [1, 2, 3];
boolArr = [true, true, false];

strNumTuple = ['Hello', 4];



console.log(myVoid);

