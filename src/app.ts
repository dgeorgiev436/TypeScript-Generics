// ****************************************** BUILT IN GENERICS ******************************************

// Arrays are of generic type in TS
// names is a array of strings
const names: Array<string> = ["Max", "Manuel"];

// Promises are of generic type in TS
// declcaring that the promise is of type Promise and it will resolve in a string
// By declaring the resolve type we receive a better typescript support
const promise: Promise<string> = new Promise((resolve, _reject) => {
	setTimeout(() => {
		resolve("This is done")
		
	}, 2000)
});


// ****************************************** CREATING GENERIC FUNCTION ******************************************
// Declare generic types T and U
// "T extends object" tells ts that it should be of type object
function merge<T extends object, U extends object>(objA: T, objB: U) {
	return Object.assign(objA, objB);
}


const mergedObj = merge({name: "Will", hobbies: ["Runing", "Reading"]}, {age: 30})
console.log(mergedObj.age);


interface Lengthy {
	length: number
}


// Declare countAndDescribe function that takes an argument of generic type T that extends the Lengthy Interface to make sure it has a length property.
// Returns an array of two elements. First of type T and second of type string
function countAndDescribe<T extends Lengthy>(element: T): [T, string]{
	let description = "Got no value"
	
	if(element.length === 1) {
		description = "Got 1 element"
	}else if (element.length > 1){
		description = `Got ${element.length} elements.`
	}
	return [element, description]
}

console.log(countAndDescribe(["Sports", "Cooking"]))


function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
	 return "value " + obj[key]
}


extractAndConvert({name: "Alex"}, "name");


// ****************************************** CREATING GENERIC CLASS ******************************************

// Generic type allows us to be more flexible while remaining strongly typed
class DataStorage<T extends string | number | boolean> {
	private data: T[] = [];
	
	addItem(item: T){
		this.data.push(item);
	}
	
	removeItem(item: T){
		
		if(this.data.indexOf(item) === -1) {
			return;
		}
		this.data.splice(this.data.indexOf(item), 1);
	}
	
	getItems(){
		return [...this.data];
	}
}

// Storing strings
const textStorage = new DataStorage<string>();
textStorage.addItem("Maximus");
textStorage.addItem("Patricus");
textStorage.removeItem("Maximus");
console.log(textStorage.getItems());

// Storing numbers
const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(55555);
numberStorage.removeItem(10);
console.log(numberStorage.getItems());


// const objectStorage = new DataStorage<object>();
// const maxObj = {name: "Max"};
// objectStorage.addItem(maxObj);
// objectStorage.addItem({name: "Marcus"});
// objectStorage.removeItem(maxObj);
// console.log(objectStorage.getItems());