
/**
 * Object.create() and Prototype
 *
 * English:
 * JavaScript objects can inherit properties and methods
 * from other objects through the Prototype Chain.
 *
 * فارسی:
 * آبجکت‌ها در جاوااسکریپت می‌توانند از طریق زنجیره پروتوتایپ،
 * پراپرتی‌ها و متدهای آبجکت‌های دیگر را به ارث ببرند.
 */

// =====================================================
// 1. Understanding Prototype
// =====================================================

/**
 * English:
 * Every ordinary JavaScript object has an internal
 * Prototype link, which connects it to another object
 * or null.
 *
 * فارسی:
 * هر آبجکت معمولی در جاوااسکریپت یک ارتباط داخلی به نام
 * Prototype دارد که آن را به آبجکت دیگری یا null متصل می‌کند.
 */

const user = {
    name: "Alex"
};

console.log(user.name);
// Alex

console.log(user.toString);
// A function inherited from Object.prototype

console.log(Object.getPrototypeOf(user) === Object.prototype);
// true


// =====================================================
// 2. Object.create()
// =====================================================

/**
 * English:
 * Object.create() creates a new object with the specified
 * object as its Prototype.
 *
 * فارسی:
 * متد Object.create() یک آبجکت جدید می‌سازد و آبجکت مشخص‌شده
 * را به‌عنوان Prototype آن قرار می‌دهد.
 */

const userMethods = {
    introduce() {
        console.log(`My name is ${this.name}`);
    }
};

const newUser = Object.create(userMethods);

newUser.name = "Sarah";

newUser.introduce();
// My name is Sarah

console.log(Object.getPrototypeOf(newUser) === userMethods);
// true


// =====================================================
// 3. Own Properties vs Inherited Properties
// =====================================================

/**
 * English:
 * Own Properties are properties directly defined
 * on an object.
 *
 * Inherited Properties are properties accessed
 * through the object's Prototype Chain.
 *
 * فارسی:
 * پراپرتی‌های مستقیم (Own Properties) مستقیماً روی خود
 * آبجکت تعریف شده‌اند.
 *
 * پراپرتی‌های ارث‌بری‌شده (Inherited Properties) از طریق
 * زنجیره پروتوتایپ در دسترس قرار می‌گیرند.
 */

const personPrototype = {
    greet() {
        console.log("Hello!");
    }
};

const person = Object.create(personPrototype);

person.name = "John";

// Checking own properties
// بررسی پراپرتی‌های مستقیم

console.log(Object.hasOwn(person, "name"));
// true

console.log(Object.hasOwn(person, "greet"));
// false

// Checking properties in the entire Prototype Chain
// بررسی پراپرتی در کل زنجیره پروتوتایپ

console.log("greet" in person);
// true

console.log("name" in person);
// true


// =====================================================
// 4. Prototype Chain
// =====================================================

/**
 * English:
 * When JavaScript cannot find a property on an object,
 * it searches its Prototype.
 *
 * This process continues until the property is found
 * or the end of the chain (null) is reached.
 *
 * فارسی:
 * زمانی که جاوااسکریپت یک پراپرتی را در خود آبجکت پیدا نکند،
 * در Prototype آن جست‌وجو می‌کند.
 *
 * این فرآیند تا زمان پیدا شدن پراپرتی یا رسیدن به انتهای
 * زنجیره (null) ادامه پیدا می‌کند.
 */

const grandParent = {
    country: "Germany"
};

const parent = Object.create(grandParent);

parent.city = "Berlin";

const child = Object.create(parent);

child.name = "Alex";

console.log(child.name);
// Alex

console.log(child.city);
// Berlin

console.log(child.country);
// Germany

console.log(Object.getPrototypeOf(child) === parent);
// true

console.log(Object.getPrototypeOf(parent) === grandParent);
// true


// =====================================================
// 5. Property Shadowing
// =====================================================

/**
 * English:
 * If an object defines a property with the same name
 * as a property in its Prototype, the object's own
 * property takes priority.
 *
 * فارسی:
 * اگر یک آبجکت پراپرتی‌ای با نام مشابه پراپرتی موجود
 * در Prototype خود تعریف کند، پراپرتی مستقیم آن اولویت دارد.
 */

const animal = {
    sound: "Unknown"
};

const dog = Object.create(animal);

dog.sound = "Bark";

console.log(dog.sound);
// Bark

console.log(animal.sound);
// Unknown

console.log(Object.hasOwn(dog, "sound"));
// true


// =====================================================
// 6. Comparing Object.create() with {}
// =====================================================

/**
 * English:
 * An object created using {} normally inherits from
 * Object.prototype.
 *
 * Object.create() allows us to specify a custom Prototype.
 *
 * Object.create(null) creates an object without a Prototype.
 *
 * فارسی:
 * آبجکتی که با {} ساخته می‌شود، به‌صورت پیش‌فرض از
 * Object.prototype ارث‌بری می‌کند.
 *
 * Object.create() به ما اجازه می‌دهد Prototype دلخواه
 * خود را مشخص کنیم.
 *
 * Object.create(null) آبجکتی بدون Prototype می‌سازد.
 */

const normalObject = {};

console.log(Object.getPrototypeOf(normalObject) === Object.prototype);
// true

const customObject = Object.create({
    type: "Custom"
});

console.log(customObject.type);
// Custom

const plainObject = Object.create(null);

plainObject.name = "Alex";

console.log(plainObject.name);
// Alex

console.log(Object.getPrototypeOf(plainObject));
// null

// plainObject.toString() would throw TypeError
// چون این آبجکت از Object.prototype ارث‌بری نمی‌کند.


// =====================================================
// 7. Checking the Prototype Chain
// =====================================================

/**
 * English:
 * Object.getPrototypeOf() returns the Prototype
 * of an object.
 *
 * Object.prototype.isPrototypeOf() checks whether
 * an object exists in another object's Prototype Chain.
 *
 * فارسی:
 * Object.getPrototypeOf() پروتوتایپ یک آبجکت را برمی‌گرداند.
 *
 * Object.prototype.isPrototypeOf() بررسی می‌کند که آیا
 * یک آبجکت در زنجیره پروتوتایپ آبجکت دیگری وجود دارد یا خیر.
 */

const vehicle = {
    start() {
        console.log("Vehicle started");
    }
};

const car = Object.create(vehicle);

car.brand = "Toyota";

console.log(Object.getPrototypeOf(car) === vehicle);
// true

console.log(vehicle.isPrototypeOf(car));
// true

console.log(Object.prototype.isPrototypeOf(car));
// true
