
/**
 * Constructor Functions and the new Keyword
 *
 * English:
 * Constructor functions provide a reusable way to create
 * multiple objects with similar properties and behavior.
 *
 * فارسی:
 * توابع سازنده روشی قابل استفاده مجدد برای ساخت چندین آبجکت
 * با پراپرتی‌ها و رفتارهای مشابه فراهم می‌کنند.
 */

// =====================================================
// 1. Basic Constructor Function
// =====================================================

/**
 * English:
 * A constructor function is a regular function used
 * with the new keyword to create objects.
 *
 * فارسی:
 * Constructor Function یک تابع معمولی است که با کلمه new
 * برای ساخت آبجکت‌های جدید استفاده می‌شود.
 */

function User(name, age) {
    this.name = name;
    this.age = age;
}

const user1 = new User("Alex", 28);
const user2 = new User("Sarah", 25);

console.log(user1.name);
// Alex

console.log(user2.name);
// Sarah


// =====================================================
// 2. How the new Keyword Works
// =====================================================

/**
 * English:
 * When a function is called with new:
 *
 * 1. A new object is created.
 * 2. The new object's Prototype is linked to
 *    the constructor's prototype property.
 * 3. The constructor function executes with this
 *    referring to the new object.
 * 4. The new object is returned unless the constructor
 *    explicitly returns another object.
 *
 * فارسی:
 * هنگام استفاده از new:
 *
 * 1. یک آبجکت جدید ساخته می‌شود.
 * 2. پروتوتایپ آبجکت جدید به ویژگی prototype تابع سازنده
 *    متصل می‌شود.
 * 3. تابع سازنده اجرا می‌شود و this به آبجکت جدید اشاره می‌کند.
 * 4. آبجکت جدید برگردانده می‌شود؛ مگر اینکه Constructor
 *    به‌صورت صریح آبجکت دیگری برگرداند.
 */

function Product(name, price) {
    this.name = name;
    this.price = price;
}

const product1 = new Product("Laptop", 1200);

console.log(product1);
// Product { name: "Laptop", price: 1200 }


// =====================================================
// 3. Methods Inside Constructor
// =====================================================

/**
 * English:
 * Defining methods inside a constructor creates
 * a separate function for each object.
 *
 * فارسی:
 * اگر متدها را داخل Constructor تعریف کنیم،
 * برای هر آبجکت یک تابع جداگانه ساخته می‌شود.
 */

function Customer(name) {
    this.name = name;

    this.sayHello = function () {
        console.log(`Hello, ${this.name}`);
    };
}

const customer1 = new Customer("Alex");
const customer2 = new Customer("Sarah");

customer1.sayHello();
// Hello, Alex

customer2.sayHello();
// Hello, Sarah

console.log(customer1.sayHello === customer2.sayHello);
// false


// =====================================================
// 4. Shared Methods Using Prototype
// =====================================================

/**
 * English:
 * Methods can be added to the constructor's prototype.
 * All instances can access the same shared method.
 *
 * فارسی:
 * می‌توان متدها را به prototype تابع سازنده اضافه کرد.
 * تمام نمونه‌های ساخته‌شده می‌توانند به همان متد مشترک
 * دسترسی داشته باشند.
 */

function Employee(name, salary) {
    this.name = name;
    this.salary = salary;
}

Employee.prototype.getBonus = function () {
    return this.salary * 0.1;
};

const employee1 = new Employee("Alex", 5000);
const employee2 = new Employee("Sarah", 7000);

console.log(employee1.getBonus());
// 500

console.log(employee2.getBonus());
// 700

console.log(employee1.getBonus === employee2.getBonus);
// true


// =====================================================
// 5. Prototype Connection
// =====================================================

/**
 * English:
 * Every object created with new Constructor()
 * has its Prototype linked to Constructor.prototype.
 *
 * فارسی:
 * هر آبجکتی که با new Constructor() ساخته می‌شود،
 * پروتوتایپ آن به Constructor.prototype متصل می‌شود.
 */

function Animal(name) {
    this.name = name;
}

const dog = new Animal("Rocky");

console.log(Object.getPrototypeOf(dog) === Animal.prototype);
// true

console.log(Animal.prototype.isPrototypeOf(dog));
// true

console.log(Object.hasOwn(dog, "name"));
// true

console.log(Object.hasOwn(dog, "constructor"));
// false

console.log(dog.constructor === Animal);
// true


// =====================================================
// 6. Constructor Return Behavior
// =====================================================

/**
 * English:
 * If a constructor explicitly returns another object,
 * that object becomes the result of the new expression.
 *
 * If it returns a primitive value, that value is ignored.
 *
 * فارسی:
 * اگر Constructor یک آبجکت دیگر را به‌صورت صریح برگرداند،
 * همان آبجکت نتیجه عبارت new خواهد بود.
 *
 * اما اگر مقدار Primitive برگرداند، آن مقدار نادیده گرفته می‌شود.
 */

// Returning an object
// برگرداندن یک آبجکت

function Admin() {
    this.name = "Alex";

    return {
        role: "Admin"
    };
}

const admin = new Admin();

console.log(admin);
// { role: "Admin" }


// Returning a primitive
// برگرداندن مقدار Primitive

function Developer() {
    this.name = "Sarah";

    return 100;
}

const developer = new Developer();

console.log(developer);
// Developer { name: "Sarah" }


// =====================================================
// 7. Calling a Constructor Without new
// =====================================================

/**
 * English:
 * Calling a constructor without new does not create
 * a new object automatically.
 *
 * In strict mode, this is undefined in a regular function
 * call, so assigning properties to this throws TypeError.
 *
 * فارسی:
 * فراخوانی Constructor بدون new به‌صورت خودکار آبجکت
 * جدیدی ایجاد نمی‌کند.
 *
 * در Strict Mode، مقدار this در فراخوانی معمولی تابع
 * برابر undefined است؛ بنابراین مقداردهی پراپرتی به آن
 * باعث TypeError می‌شود.
 */

function Person(name) {
    this.name = name;
}

// Correct usage:
// استفاده صحیح

const person = new Person("John");

console.log(person.name);
// John

// Incorrect usage in strict mode:
// استفاده نادرست در Strict Mode

// Person("John");
// TypeError: Cannot set properties of undefined


// =====================================================
// 8. Constructor vs Prototype
// =====================================================

/**
 * English:
 * Constructor functions initialize instance-specific
 * properties.
 *
 * Prototype stores methods and properties shared
 * through the Prototype Chain.
 *
 * فارسی:
 * Constructor Function برای مقداردهی پراپرتی‌های اختصاصی
 * هر نمونه استفاده می‌شود.
 *
 * Prototype محل قرارگیری متدها و پراپرتی‌های مشترکی است
 * که از طریق زنجیره پروتوتایپ در دسترس قرار می‌گیرند.
 */

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.start = function () {
    console.log(`${this.brand} started`);
};

const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("BMW", "X5");

car1.start();
// Toyota started

car2.start();
// BMW started

console.log(car1.start === car2.start);
// true
