task#1
 Deep Understanding of Objects and Prototypes
 Create a constructor fucntion book,Add the toggleReadStatus,getBookInfo method to the prototype
Convert this book Constructor to an ES6 Class with same functionality

task#2
//bcz 2s delay, done this task in separate file for reduce complexity
// Handling Promises and Callbacks
Create two functions,Then, write a `main` function that calls both `fetchUserData` and `fetchOrderData` using callbacks
, ensuring that the order data is fetched only after the user data is successfully retrieved.
Rewrite this solution using **Promises** and `.then()/.catch()` to handle the asynchronous logic.

task#3
//Advanced Asynchronous Handling: Async/Await and Error Handling
Write two functions using `async/await`,Then write a function `processData()` that:
 Fetches user and order data concurrently using `Promise.all()`,Logs the data if successful, Catches any errors if the promises are rejected.
Modify the `getUser()` function to sometimes throw an error (e.g., based on a random condition) and ensure that the error is handled properly using `try/catch` in `processData()`.

task#4
//Optional Chaining and Conditional Branching 
Write a function `getUserDetails(user)`,- Takes a `user` object with properties `name`, `age`, and `address`,
Uses **optional chaining** to safely access `user.address.city` and return `"City not available"` if the city is missing.
Uses a **ternary operator** to return `"Adult"` if `user.age` is 18 or older, otherwise `"Minor"`.
Modify the object to simulate cases where `address` or `city` is missing and test that optional chaining works as expected.

task#5
// Object.keys, Object.values, Object.entries 
 Write a function `logCarProperties(car)` that:
 Uses **`Object.keys()`** to log all property names of the car, Uses **`Object.values()`** to log all property values of the car.
   Uses **`Object.entries()`** to log key-value pairs of the car object.
  Use a `for...of` loop to iterate over the results of `Object.entries()` and print each key-value pair in the format:  
`"[key]: [value]"`

task#6
//JSON and Data Manipulation
Write a function `transformData()` that takes an object, Uses `JSON.stringify()` to convert the object into a JSON string, Uses `JSON.parse()` to
convert the JSON string back to an object. Modifies the returned object by adding a new property `discountedPrice`, which is 10% lower than the original price.
Returns the final object.

task#7
//Combining it All: Complex Data Manipulation and API Simulation 
firstly,- Create two mock API calls,then write a funtion that Fetches user data and order data concurrently using `Promise.all()`.
Uses **optional chaining** to check if the `user.address.city` and `order.product.price` are available.
Uses **`Object.keys()`, `Object.values()`, and `Object.entries()`** to log details of the user and order.
Converts both objects into JSON format using `JSON.stringify()` and logs the result.
At Last, Adds error handling with `try/catch` to log any errors if the promises fail.






