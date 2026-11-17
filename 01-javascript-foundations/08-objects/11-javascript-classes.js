
/**
 * JavaScript Classes
 *
 * English:
 * Classes provide a cleaner and more structured syntax
 * for creating objects and managing shared behavior.
 *
 * فارسی:
 * کلاس‌ها ساختاری خواناتر و منظم‌تر برای ساخت آبجکت‌ها
 * و مدیریت رفتارهای مشترک فراهم می‌کنند.
 */

// =====================================================
// 1. Basic Class
// =====================================================

/**
 * English:
 * A class is a template for creating objects.
 * Multiple instances can be created from one class.
 *
 * فارسی:
 * کلاس یک الگو برای ساخت آبجکت‌ها است.
 * می‌توان چندین نمونه مختلف از یک کلاس ایجاد کرد.
 */

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const user1 = new User("Alex", 28);
const user2 = new User("Sarah", 25);

console.log(user1.name);
// Alex

console.log(user2.name);
// Sarah


// =====================================================
// 2. Constructor Method
// =====================================================

/**
 * English:
 * The constructor() method is a special method
 * that runs when a new instance is created.
 *
 * It initializes the properties of the new object.
 *
 * فارسی:
 * متد constructor() یک متد ویژه است که هنگام ساخت
 * یک نمونه جدید اجرا می‌شود.
 *
 * وظیفه آن مقداردهی اولیه پراپرتی‌های آبجکت جدید است.
 */

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const laptop = new Product("Laptop", 1200);

console.log(laptop.name);
// Laptop

console.log(laptop.price);
// 1200


// =====================================================
// 3. Methods Inside Classes
// =====================================================

/**
 * English:
 * Methods defined inside a class are automatically
 * added to the class's prototype.
 *
 * All instances share the same method.
 *
 * فارسی:
 * متدهایی که داخل کلاس تعریف می‌شوند به‌صورت خودکار
 * به Prototype کلاس اضافه می‌شوند.
 *
 * تمام نمونه‌های کلاس از یک متد مشترک استفاده می‌کنند.
 */

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }
}

const employee1 = new Employee("Alex", 5000);
const employee2 = new Employee("Sarah", 7000);

console.log(employee1.getAnnualSalary());
// 60000

console.log(employee2.getAnnualSalary());
// 84000

console.log(
    employee1.getAnnualSalary === employee2.getAnnualSalary
);
// true


// =====================================================
// 4. Class and Prototype
// =====================================================

/**
 * English:
 * JavaScript classes use the Prototype Chain internally.
 *
 * The class's methods are stored on its prototype,
 * while instance-specific properties are stored
 * directly on each instance.
 *
 * فارسی:
 * کلاس‌های JavaScript در ساختار داخلی خود از
 * Prototype Chain استفاده می‌کنند.
 *
 * متدهای کلاس روی Prototype قرار می‌گیرند،
 * اما پراپرتی‌های اختصاصی هر نمونه مستقیماً
 * روی خود نمونه ذخیره می‌شوند.
 */

class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("Animal sound");
    }
}

const dog = new Animal("Rocky");

// Checking own properties
// بررسی پراپرتی‌های مستقیم

console.log(Object.hasOwn(dog, "name"));
// true

console.log(Object.hasOwn(dog, "makeSound"));
// false

// Checking Prototype
// بررسی پروتوتایپ

console.log(Object.getPrototypeOf(dog) === Animal.prototype);
// true

console.log(Animal.prototype.isPrototypeOf(dog));
// true


// =====================================================
// 5. Class vs Constructor Function
// =====================================================

/**
 * English:
 * Both classes and constructor functions can create
 * objects using the new keyword.
 *
 * However, classes provide a more structured syntax.
 *
 * Classes must be called with new, while ordinary
 * constructor functions can technically be called
 * without new (although this may cause errors).
 *
 * فارسی:
 * هم کلاس‌ها و هم Constructor Functionها می‌توانند
 * با استفاده از new آبجکت ایجاد کنند.
 *
 * اما کلاس‌ها ساختاری منظم‌تر برای این کار فراهم می‌کنند.
 *
 * کلاس‌ها حتماً باید با new فراخوانی شوند؛ اما توابع
 * سازنده معمولی از نظر فنی می‌توانند بدون new نیز اجرا شوند
 * که ممکن است باعث خطا یا رفتار ناخواسته شود.
 */

// Constructor Function
// تابع سازنده

function CarConstructor(brand) {
    this.brand = brand;
}

CarConstructor.prototype.start = function () {
    console.log("Car started");
};

const car1 = new CarConstructor("Toyota");

console.log(car1.brand);
// Toyota


// Class
// کلاس

class Car {
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        console.log("Car started");
    }
}

const car2 = new Car("BMW");

console.log(car2.brand);
// BMW

// Both use Prototype
// هر دو از Prototype استفاده می‌کنند

console.log(
    Object.getPrototypeOf(car1) === CarConstructor.prototype
);
// true

console.log(
    Object.getPrototypeOf(car2) === Car.prototype
);
// true


// =====================================================
// 6. Classes Cannot Be Called Without new
// =====================================================

/**
 * English:
 * Classes cannot be invoked as regular functions.
 * Calling a class without new throws a TypeError.
 *
 * فارسی:
 * کلاس‌ها را نمی‌توان مانند توابع معمولی فراخوانی کرد.
 * اجرای کلاس بدون new باعث TypeError می‌شود.
 */

// Car("Honda");
// TypeError: Class constructor Car cannot be invoked without 'new'


// =====================================================
// 7. Default Constructor
// =====================================================

/**
 * English:
 * If no constructor is defined, JavaScript provides
 * a default constructor automatically.
 *
 * فارسی:
 * اگر داخل کلاس Constructor تعریف نکنیم،
 * JavaScript به‌صورت خودکار یک Constructor پیش‌فرض
 * در اختیار ما قرار می‌دهد.
 */

class Category {
    showMessage() {
        console.log("Category created");
    }
}

const category = new Category();

category.showMessage();
// Category created


// =====================================================
// 8. Class Methods Are Shared
// =====================================================

/**
 * English:
 * Class methods are shared through the prototype.
 * They are not recreated for every instance.
 *
 * فارسی:
 * متدهای کلاس از طریق Prototype به اشتراک گذاشته می‌شوند.
 * برای هر نمونه یک نسخه جدید از متد ساخته نمی‌شود.
 */

class UserProfile {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        return `My name is ${this.name}`;
    }
}

const profile1 = new UserProfile("Alex");
const profile2 = new UserProfile("Sarah");

console.log(profile1.introduce());
// My name is Alex

console.log(profile2.introduce());
// My name is Sarah

console.log(profile1.introduce === profile2.introduce);
// true
