
/**
 * JavaScript Object Fundamentals
 *
 * مبانی Object در جاوااسکریپت
 *
 * English:
 * An object is a collection of properties.
 * Each property consists of a key and a value.
 *
 * فارسی:
 * آبجکت مجموعه‌ای از Propertyها است.
 * هر Property شامل یک Key و یک Value است.
 */

// --------------------------------------------------
// 1. Creating an Object
// 1. ساخت یک آبجکت
// --------------------------------------------------

/**
 * English:
 * Object Literal is the most common way
 * to create an object in JavaScript.
 *
 * فارسی:
 * روش Object Literal رایج‌ترین روش
 * برای ساخت آبجکت در جاوااسکریپت است.
 */

const user = {
  name: "Alex",
  age: 28,
  role: "Frontend Developer"
};

console.log(user);


// --------------------------------------------------
// 2. Different Property Value Types
// 2. انواع مختلف مقادیر Property
// --------------------------------------------------

/**
 * English:
 * Object properties can store different types of values,
 * such as strings, numbers, booleans, arrays,
 * objects, and functions.
 *
 * فارسی:
 * Propertyهای آبجکت می‌توانند انواع مختلفی از مقادیر
 * مانند رشته، عدد، بولین، آرایه، آبجکت و تابع را نگهداری کنند.
 */

const product = {
  name: "Laptop",
  price: 1200,
  available: true,

  specifications: {
    ram: 16,
    storage: 512
  },

  tags: ["Electronics", "PC"],

  getPrice: function () {
    return this.price;
  }
};

console.log(product);


// --------------------------------------------------
// 3. Accessing Object Properties
// 3. دسترسی به Propertyهای آبجکت
// --------------------------------------------------

/**
 * English:
 * We can access object properties using dot notation.
 *
 * فارسی:
 * برای دسترسی به Propertyهای آبجکت
 * می‌توانیم از Dot Notation استفاده کنیم.
 */

console.log(user.name); // Alex
console.log(user.age);  // 28

// Accessing nested object properties
// دسترسی به Propertyهای آبجکت تو در تو

console.log(product.specifications.ram); // 16
console.log(product.specifications.storage); // 512


// --------------------------------------------------
// 4. Object Methods
// 4. متدهای آبجکت
// --------------------------------------------------

/**
 * English:
 * A function stored as an object property
 * is commonly called a method.
 *
 * فارسی:
 * تابعی که به‌عنوان یک Property در آبجکت ذخیره شده،
 * معمولاً Method نامیده می‌شود.
 */

const developer = {
  name: "Sarah",

  introduce: function () {
    console.log("Hello, I am " + this.name);
  }
};

developer.introduce();
// Hello, I am Sarah


// --------------------------------------------------
// 5. Nested Objects
// 5. آبجکت‌های تو در تو
// --------------------------------------------------

/**
 * English:
 * An object can contain another object
 * as one of its property values.
 *
 * فارسی:
 * یک آبجکت می‌تواند آبجکت دیگری را
 * به‌عنوان مقدار یکی از Propertyهای خود نگهداری کند.
 */

const employee = {
  name: "John",

  address: {
    city: "Berlin",
    country: "Germany"
  },

  job: {
    title: "Frontend Developer",
    experience: 4
  }
};

console.log(employee.address.city); // Berlin
console.log(employee.job.title);    // Frontend Developer


// --------------------------------------------------
// 6. Object Constructor
// 6. ساخت آبجکت با Constructor
// --------------------------------------------------

/**
 * English:
 * The Object constructor can also create
 * an empty object.
 *
 * فارسی:
 * با استفاده از Object Constructor نیز
 * می‌توان یک آبجکت خالی ایجاد کرد.
 */

const anotherUser = new Object();

anotherUser.name = "Michael";
anotherUser.age = 30;

console.log(anotherUser);


// --------------------------------------------------
// 7. Real-World Object Example
// 7. نمونه کاربردی آبجکت
// --------------------------------------------------

/**
 * English:
 * Objects help us represent real-world entities
 * and organize related information.
 *
 * فارسی:
 * آبجکت‌ها به ما کمک می‌کنند موجودیت‌های واقعی را
 * مدل‌سازی کرده و اطلاعات مرتبط را سازمان‌دهی کنیم.
 */

const order = {
  id: 1001,
  customer: {
    name: "Alex",
    country: "Germany"
  },

  items: [
    {
      name: "Laptop",
      price: 1200
    },
    {
      name: "Mouse",
      price: 50
    }
  ],

  isPaid: true
};

console.log(order.customer.name); // Alex
console.log(order.items[0].name); // Laptop
console.log(order.isPaid);        // true
