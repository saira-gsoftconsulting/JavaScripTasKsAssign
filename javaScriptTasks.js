// Task 1
// Deep Understanding of Objects and Prototypes
// Create a constructor fucntion book
console.log("Solution:Task1");
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
// Add the toggleReadStatus method to the prototype
Book.prototype.toggleReadStatus = function () {
  this.read = !this.read;
};
// Add the getBookInfo method to the prototype
Book.prototype.getBookInfo = function () {
  const readStatus = this?.read ? "Read" : "Not Read";
  return `The book ${this?.title} is read by ${this?.author} has ${this?.pages} pages. status:${readStatus}.`;
};
const myBook = new Book("Computer Science", "Tim Berners-Lee", 180, true);
console.log(myBook);
console.log(myBook.getBookInfo());
myBook.toggleReadStatus();
console.log(myBook.getBookInfo());
//Convert this book Constructor to an ES6 Class with same functionality
class newBook {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  //toggle the read Status
  toggleReadStatus() {
    this.read = !this.read;
  }
  //bookInfo
  getBookInfo() {
    const readStatus = this?.read ? "Read" : "Not Read";
    return `The book ${this?.title} is read by ${this?.author} has ${this?.pages} pages. status:${readStatus}.`;
  }
}
const myNewBook = new newBook("MathMatics", "Archimedes", 200, true);
console.log(myNewBook.getBookInfo());
myNewBook.toggleReadStatus();
console.log(myNewBook.getBookInfo());

//Task 2
// Handling Promises and Callbacks
//userData
console.log("Solution:Task2");
const userData = {
  name: "Alice",
  age: 30,
  city: "New Work",
};
//orderData
const orderData = {
  orderId: "5678",
  amount: 1500,
  product: "Smartphone",
};
//callback to fetch userData
const fetchUserData = (callback) => {
  setTimeout(() => {
    return callback(userData);
  }, 2000);
};
//callback to orderData
const fetchOrderData = (callback) => {
  setTimeout(() => {
    return callback(orderData);
  }, 2000);
};
//main function  to call userData and orderData,fetch userData before orderData
const main = () => {
  fetchUserData((userData) => {
    console.log("Received User data", userData);

    fetchOrderData((orderData) => {
      console.log("Received order data", orderData);
    });
  });
};
main();
//ReWrite with Promises and then/catch to handle the asynchronous logic
const fetchUserData2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(userData);
    });
  });
};
const fetchOrderData2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(orderData);
    });
  });
};
//main
function main2() {
  fetchUserData2()
    .then((userData) => {
      console.log("resceived user data", userData);
      return fetchOrderData2();
    })
    .then((orderData) => {
      console.log("received order data", orderData);
    })
    .catch((error) => {
      console.log("error occur n fetching data", error);
    });
}
main2();

//task 3
//Advanced Asynchronous Handling: Async/Await and Error Handling
console.log("Solution:Task3");
const userData2 = {
  name: "john",
  email: "john@example.com",
};
const orderData2 = {
  orderId: "7890",
  total: 3000,
};
let personData = {
  name: "John",
  email: "jihn@example.com",
};
async function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const errorOccur = Math.random() < 0.1;
      if (errorOccur) {
        reject("error occur in fetching");
      } else {
        resolve(personData);
      }
    }, 2000);
  });
}
async function getOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(personData);
    });
  }, 3000);
}
async function processData() {
  try {
    const [userData2, orderData2] = await Promise.all([getUser(), getOrder()]);
    console.log(userData2, orderData2, "userData,orderData");
  } catch (error) {
    console.log("error occur", error);
  }
}
processData();

//task4:
//Optional Chaining and Conditional Branching
console.log("Solution:Task4");
function getUserDetails(user) {
  //optional chaining
  const city = user.address?.city || "city not available";
  const age = user.age >= 18 ? "Adult" : "Minor";
  return `${age} from ${city}`;
}
const userCase1 = { name: "Jahn", age: 17, address: { city: "Los Angeles" } };
console.log(getUserDetails(userCase1));
//Modify the object to simulate cases where `address` or `city` is missing and test that optional chaining works as expected.
const UserCase2 = { name: "usama", age: 20 };
console.log(getUserDetails(UserCase2));
const UserCase3 = { name: "sana", age: 25, address: {} };
const UserCase4 = { name: "saira", age: 23, address: { city: "Lahore" } };
console.log(getUserDetails(UserCase4));

//task 5:
// Object.keys, Object.values, Object.entries
console.log("Solution:Task5");
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  owner: { name: "John", age: 35 },
};
//function
function logCarProperties(car) {
  //Object.keys,Object.values,Object.entries
  console.log("Property names:", Object.keys(car));
  console.log("Property values:", Object.values(car));
  console.log("Key-value pairs:");
  //for-of Loop to iterate over the results of Object.entries() & pkey-value pair format
  for (const [key, value] of Object.entries(car)) {
    if (typeof value === "object" && !Array.isArray(value)) {
      console.log(`${key}:`);
      for (const [nestedKey, nestedValue] of Object.entries(value)) {
        console.log(`  ${nestedKey}: ${nestedValue}`);
      }
    } else {
      console.log(`${key}: ${value}`);
    }
  }
}
logCarProperties(car);

//task 6 JSON and Data Manipulation
console.log("Solution:Task6");
const data = {
  productId: 123,
  productName: "Laptop",
  price: 1000,
  availability: true,
};
// transformData
function transformData(data) {
  // Uses `JSON.stringify()` to convert the object into a JSON string
  const jsonStringfy = JSON.stringify(data);
  console.log("Json Stringfy here:", jsonStringfy);
  // Uses `JSON.parse()` to convert the JSON string back to an object
  const parsedData = JSON.parse(jsonStringfy);
  //Modifies the returned object by adding a new property `discountedPrice`, which is 10% lower than the original price.
  parsedData.discountPrice = parsedData.price - parsedData.price * 0.1;
  return parsedData;
}
const tranaFormedData = transformData(data);
console.log("transfromed data here:", tranaFormedData);

//task 7:
console.log("Solution:Task7");
// Combining it All: Complex Data Manipulation and API Simulation
//two mock Api's Calls;
function getUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Alice",
        age: 25,
        address: { city: "Seattle" },
      });
    }, 1000);
  });
}
function getOrderData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        orderId: "ORD123",
        total: 200,
        product: { name: "phone", price: 200 },
      });
    }, 1500);
  });
}
async function fetchAndProcessData() {
  //Add try/catch to log any errors if the promise fail
  try {
    const [user, order] = await Promise.all([getUserData(), getOrderData()]);
    //use Optional Chaining
    const userCity = user?.address?.city || "City not available";
    const productPrice = order?.product?.price || "Price not available";
    console.log(`User city: ${userCity}`);
    console.log(`Product price: ${productPrice}`);
    //Objects,Keys & Values to log details of User
    console.log("User details:");
    console.log("Keys:", Object.keys(user));
    console.log("Values:", Object.values(user));
    console.log("Entries:", Object.entries(user));
    //Objects,Keys & Values to log details of Order
    console.log("Order details:");
    console.log("Keys:", Object.keys(order));
    console.log("Values:", Object.values(order));
    console.log("Entries:", Object.entries(order));
    //convert both object into json format
    const userJson = JSON.stringify(user);
    const orderJson = JSON.stringify(order);
    console.log("User JSON:", userJson);
    console.log("Order JSON:", orderJson);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
fetchAndProcessData();
