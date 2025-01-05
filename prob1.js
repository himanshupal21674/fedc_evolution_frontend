// // // Quet-1 You have an array of fruits containing 10 elements. Your task is to use the splice method to rearrange the fruits in the following manner:

// // // Remove the last 4 fruits from the end of the array.
// // // Add the removed fruits to the beginning of the array in the same order they were removed.
// // // Write a JavaScript function named rearrangeFruits that takes an array of fruits as input and performs the specified rearrangement. The function should return the modified array of fruits.

// // // Solution:-

// const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];

function rearrangeFruits(fruits) {
    const removedFruits = fruits.splice(-4)

    fruits.unshift(...removedFruits);

    return fruits;
}

console.log(rearrangeFruits(fruits));


// // // ----------------------------------------------------------------------------
// // // ques-2 Grouping and Sorting Products Using Higher-Order Functions.
// // // You have been provided with an array of product objects. Each product object contains the following properties: productName, category, quantity, price, and rating. Your task is to create a function groupAndSortProducts using only Higher-Order Functions that takes this array of products as input and returns an object where products are grouped by their categories. Additionally, within each category, the products should be sorted in descending order based on their ratings.

// // // Write a function groupAndSortProducts that performs the following tasks using only Higher-Order Functions:

// // // Group the products by their categories.
// // // Sort the products within each category based on their ratings in descending order.
// // // Return an object where keys are category names and values are arrays containing products sorted by rating.
// // // Ensure that the function handles the case where there are no products in a particular category.


// // // Solution:=

const products = [
    { productName: "Laptop", category: "Electronics", quantity: 10, price: 1200, rating: 4.5 },
    { productName: "Smartphone", category: "Electronics", quantity: 15, price: 800, rating: 4.2 },
    { productName: "Headphones", category: "Electronics", quantity: 20, price: 50, rating: 4.0 },
    { productName: "Backpack", category: "Fashion", quantity: 30, price: 50, rating: 4.7 },
    { productName: "Shoes", category: "Fashion", quantity: 25, price: 80, rating: 4.3 },
    { productName: "T-Shirt", category: "Fashion", quantity: 40, price: 20, rating: 4.8 },
    { productName: "Desk", category: "Furniture", quantity: 5, price: 300, rating: 4.6 },
    { productName: "Chair", category: "Furniture", quantity: 8, price: 150, rating: 4.4 },
    { productName: "Table", category: "Furniture", quantity: 7, price: 200, rating: 4.1 },
    { productName: "Bookshelf", category: "Furniture", quantity: 3, price: 100, rating: 4.9 },
    { productName: "Camera", category: "Photography", quantity: 12, price: 500, rating: 4.7 },
    { productName: "Lens", category: "Photography", quantity: 6, price: 250, rating: 4.5 }
   ];
   
function groupAndSortProducts(products) {
    const groupedProducts = products.reduce((acc, product) => {
        if(!acc[product.category]) { 
             acc[product.category] = [];
        }
        acc[product.category].push(product);

    return acc;
    },{});

    Object.keys(groupedProducts).forEach(catagory => {
        groupedProducts[catagory].sort((a, b) => b.rating - a.rating);

    });

    return groupedProducts;
    
}  

const groupedAndSortedProducts = groupAndSortProducts(products);

console.log(groupedAndSortedProducts);

// // // ---------------------------------------------------------------------------------------
// // // ques-3
// // // 3. Supermarket Analytics
// // // You have been provided with data representing the inventory and sales of a supermarket. The data structure is as follows: 

const supermarketData = {
    supermarketName: "SuperMart",
    location: "Cityville",
    products: {
      electronicsSection: {
        inventory: {
          laptop: { available: 20, price: 800 },
          smartphone: { available: 30, price: 500 },
          tablet: { available: 15, price: 300 },
        },
        sales: [
         { id: 1, items: ["laptop", "tablet"], total: 1100 },
          { id: 2, items: ["smartphone", "tablet"], total: 800 },
          { id: 3, items: ["laptop", "smartphone"], total: 1300 },
        ],
      },
      clothingSection: {
        inventory: {
          shirt: { available: 50, price: 25 },
          jeans: { available: 40, price: 40 },
          dress: { available: 30, price: 60 },
       },
        sales: [
          { id: 1, items: ["shirt", "jeans"], total: 60 },
          { id: 2, items: ["dress", "shirt"], total: 85 },
         { id: 3, items: ["jeans", "dress"], total: 100 },
        ],
     },
   },
    sectionNames: ["electronicsSection", "clothingSection"],
  };

  function findProductDetails(supermarketData) {
const {
    products: { 
        electronicsSection: {
            inventory: {laptop:
                 {available: laptopAvailable,
                     price: laptopPrice}},
                    },
        clothingSection: {
             inventory: {shirt: 
                 {available: shirtAvailable, price: shirtPrice}},
                        },
                    },

    } = supermarketData;

    return {
        laptopAvailable,
        shirtAvailable,
        laptopPrice,
        shirtPrice,
    };
}

  console.log(findProductDetails(supermarketData));


// // -----------------------------------------------------------------------------------

// // // Quest-4  4. File Segregation

const files = [
    "document1.pdf",
    "document2.pdf",
    "image1.png",
    "image2.png",
    "text1.txt",
    "text2.txt",
    "photo1.jpg",
    "photo2.jpg",
    "program1.exe",
    "program2.exe",
    "data1.csv",
    "data2.csv",
    "report1.pdf",
    "report2.pdf",
    "image3.png",
    "text3.txt",
    "photo3.jpg",
    "document3.pdf"
   ];
function segregateFiles(files) {
    return files.reduce((acc, file) => {
        const extension = file.slice(file.lastIndexOf('.') + 1);

        if (!acc[extension]) {
            acc[extension] = [];
        }

        acc[extension].push(file);

        return acc;
    }, {});
}   

console.log(segregateFiles(files));


// // -----------------------------------------------------------------------------------------------------------

// // Quest-5

const employees = [
    { name: "Alice", age: 30, salary: 50000, department: "HR" },
    { name: "Bob", age: 35, salary: 60000, department: "Finance" },
    { name: "Charlie", age: 28, salary: 55000, department: "HR" },
    { name: "David", age: 40, salary: 70000, department: "IT" },
    { name: "Eve", age: 32, salary: 65000, department: "Finance" },
   ];

function groupByDepartment(employees) {
    return employees.reduce((acc, employee) => {
        const { department } = employee;
        
        if(!acc[department]) {
            acc[department] = [];
        }
        acc[department].push(employee);

        acc[department].sort((a, b) => a.age - b.age);

        return acc;
    }, {});
} 
   
  console.log(groupByDepartment(employees));

// //   --------------------------------------------------------------------------------------------------------
   
// // Quest-6.1

const company = {
    name: "Tech Solutions Inc.",
    departments: {
      engineering: {
       manager: {
          name: "John Doe",
          age: 35,
          position: "Engineering Manager",
         salary: 100000,
                },
        employees: [
          { name: "Alice", age: 28, position: "Software Engineer", salary: 80000 },
          { name: "Bob", age: 30, position: "Senior Software Engineer", salary: 90000 },
        ],
      },
      sales: {
        manager: {
          name: "Jane Smith",
          age: 40,
          position: "Sales Manager",
          salary: 95000,
        },
        employees: [
          { name: "Charlie", age: 32, position: "Sales Representative", salary: 60000 },
          { name: "David", age: 29, position: "Sales Associate", salary: 50000 },
        ],
      },
      marketing: {
        manager: {
          name: "Emily Johnson",
          age: 37,
          position: "Marketing Manager",
          salary: 90000,
        },
        employees: [
          { name: "Eva", age: 31, position: "Marketing Specialist", salary: 70000 },
          { name: "Frank", age: 33, position: "Marketing Coordinator", salary: 65000 },
        ],
      },
    },
  };

  function extractManagerDetails(company) {
    const { departments } = company;
    return Object.values(departments).map(({ manager }) => ({
        name: manager.name,
        age: manager.age,
        position: manager.position,
        salary: manager.salary,
    })
  );
  }

  function calculatorAverageSalary(company) {
    const { departments } = company;
    let totalSalary = 0;
    let totalEmployees = 0;

    Object.values(departments).forEach(
        ({ manager, employees }) => {
            totalSalary += manager.salary;
            totalEmployees ++;

            employees.forEach(({ salary }) => {
                totalSalary += salary;
                totalEmployees++;
            });
        });

        return (totalSalary / totalEmployees).toFixed(2);
  }

  function findHighestPaidEmployee(company) {
    const { departments } = company;
    let highestPaid = { name: "", salary: 0 };

    Object.values(departments).forEach(
        ({ manager, employees }) => {
            if (manager.salary > highestPaid.salary) {
                highestPaid = { name: manager.name, salary: manager.salary };
            }
            employees.forEach(
                ({ name, salary }) => {
                    if (salary > highestPaid.salary) {
                        highestPaid = { name, salary};
                    }
                });
        });

        return highestPaid;
  }
   
  console.log(extractManagerDetails(company));

  console.log(calculatorAverageSalary(company));

  console.log(findHighestPaidEmployee(company));