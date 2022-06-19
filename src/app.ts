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