
/**
 * JavaScript Primitive vs Reference Types
 *
 * تفاوت انواع Primitive و Reference در جاوااسکریپت
 *
 * English:
 * This file explains how primitive values and objects
 * behave when they are assigned to other variables.
 *
 * فارسی:
 * این فایل نحوه رفتار مقادیر Primitive و آبجکت‌ها را
 * هنگام اختصاص دادن به متغیرهای دیگر بررسی می‌کند.
 */

// --------------------------------------------------
// 1. Primitive Types
// 1. انواع Primitive
// --------------------------------------------------

/**
 * English:
 * Primitive values are basic, immutable values in JavaScript.
 * When a primitive value is assigned to another variable,
 * its value is copied independently.
 *
 * فارسی:
 * مقادیر Primitive داده‌های پایه و تغییرناپذیر در جاوااسکریپت هستند.
 * وقتی یک مقدار Primitive به متغیر دیگری اختصاص داده می‌شود،
 * مقدار آن به‌صورت مستقل کپی می‌شود.
 */

let firstNumber = 100;

let secondNumber = firstNumber;

secondNumber = 200;

console.log(firstNumber);  // 100
console.log(secondNumber); // 200


// --------------------------------------------------
// 2. Reference Types
// 2. انواع Reference
// --------------------------------------------------

/**
 * English:
 * Objects are reference values in JavaScript.
 * When an object is assigned to another variable,
 * the reference to the same object is copied.
 *
 * فارسی:
 * آبجکت‌ها در جاوااسکریپت مقادیر Reference هستند.
 * وقتی یک آبجکت به متغیر دیگری اختصاص داده می‌شود،
 * ارجاع به همان آبجکت کپی می‌شود.
 */

const user1 = {
  name: "Alex",
  age: 28
};

const user2 = user1;

user2.age = 30;

console.log(user1.age); // 30
console.log(user2.age); // 30


// --------------------------------------------------
// 3. Comparing Primitive and Reference Assignment
// 3. مقایسه انتساب Primitive و Reference
// --------------------------------------------------

/**
 * English:
 * Primitive assignment copies the value independently.
 * Object assignment copies the reference to the same object.
 *
 * فارسی:
 * در انتساب Primitive، مقدار به‌صورت مستقل کپی می‌شود.
 * در انتساب Object، ارجاع به همان آبجکت کپی می‌شود.
 */

// Primitive assignment
// انتساب Primitive

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20


// Reference assignment
// انتساب Reference

const firstUser = {
  name: "Alex"
};

const secondUser = firstUser;

secondUser.name = "Sarah";

console.log(firstUser.name);  // Sarah
console.log(secondUser.name); // Sarah


// --------------------------------------------------
// 4. Reassigning a Reference
// 4. اختصاص دادن یک Reference جدید
// --------------------------------------------------

/**
 * English:
 * Reassigning a variable to a new object does not
 * modify the original object.
 *
 * Other variables that still reference the original
 * object remain connected to it.
 *
 * فارسی:
 * وقتی یک متغیر به آبجکت جدیدی اختصاص داده می‌شود،
 * آبجکت قبلی تغییر نمی‌کند.
 *
 * متغیرهای دیگری که همچنان به آبجکت قبلی ارجاع دارند،
 * ارتباط خود را با آن حفظ می‌کنند.
 */

let product1 = {
  price: 500
};

let product2 = product1;

// product2 still references the original object
// product2 همچنان به آبجکت اولیه اشاره می‌کند

product1 = {
  price: 900
};

// product1 references a new object
// product1 به آبجکت جدیدی اشاره می‌کند

console.log(product1.price); // 900
console.log(product2.price); // 500


// --------------------------------------------------
// 5. Object Mutation
// 5. تغییر مقادیر آبجکت
// --------------------------------------------------

/**
 * English:
 * Object mutation means changing the properties
 * of an existing object without creating a new object.
 *
 * فارسی:
 * Mutation آبجکت به معنای تغییر Propertyهای یک آبجکت موجود
 * بدون ایجاد یک آبجکت جدید است.
 */

const account = {
  balance: 1000
};

const anotherAccount = account;

// Mutating the shared object
// تغییر آبجکت مشترک

anotherAccount.balance = 1500;

console.log(account.balance);        // 1500
console.log(anotherAccount.balance); // 1500


// --------------------------------------------------
// 6. Primitive vs Object with const
// 6. تفاوت Primitive و Object با const
// --------------------------------------------------

/**
 * English:
 * The const keyword prevents reassignment of a variable.
 * However, it does not make an object immutable.
 *
 * Object properties can still be modified.
 *
 * فارسی:
 * کلمه کلیدی const از اختصاص دادن مجدد مقدار به متغیر جلوگیری می‌کند.
 * اما باعث تغییرناپذیر شدن آبجکت نمی‌شود.
 *
 * Propertyهای آبجکت همچنان قابل تغییر هستند.
 */

const settings = {
  theme: "light"
};

// This is allowed
// این تغییر مجاز است

settings.theme = "dark";

console.log(settings.theme); // dark

// This would cause a TypeError:
// settings = { theme: "blue" };


// --------------------------------------------------
// 7. Practical Example: Product List
// 7. مثال کاربردی: لیست محصولات
// --------------------------------------------------

/**
 * English:
 * When multiple variables reference the same object,
 * changing that object through one reference
 * affects the data observed through other references.
 *
 * فارسی:
 * وقتی چند متغیر به یک آبجکت مشترک ارجاع دارند،
 * تغییر آبجکت از طریق یکی از ارجاع‌ها
 * روی اطلاعات قابل مشاهده از طریق ارجاع‌های دیگر نیز تأثیر می‌گذارد.
 */

const product = {
  name: "Laptop",
  price: 1200
};

const selectedProduct = product;

selectedProduct.price = 1000;

console.log(product.price);         // 1000
console.log(selectedProduct.price); // 1000


// --------------------------------------------------
// 8. Connection to Vue 3
// 8. ارتباط با Vue 3
// --------------------------------------------------

/**
 * English:
 * Understanding object references is important in Vue 3.
 * Multiple parts of an application may access the same object.
 *
 * Vue's reactivity system uses proxies and reactive references
 * to track certain property accesses and mutations.
 *
 * فارسی:
 * درک Reference آبجکت‌ها در Vue 3 اهمیت زیادی دارد.
 * بخش‌های مختلف یک برنامه ممکن است به یک آبجکت مشترک دسترسی داشته باشند.
 *
 * سیستم Reactivity در Vue از Proxy و ارجاع‌های واکنشی
 * برای ردیابی برخی دسترسی‌ها و تغییرات Propertyها استفاده می‌کند.
 */

// Basic JavaScript example (not Vue reactivity)
// مثال ساده جاوااسکریپت (بدون Reactivity مربوط به Vue)

const userProfile = {
  name: "Alex",
  age: 28
};

const profileReference = userProfile;

profileReference.age = 29;

console.log(userProfile.age); // 29

// Note:
// This example demonstrates shared object references.
// It does not demonstrate Vue's reactive tracking.
// 
// نکته:
// این مثال مفهوم Reference مشترک را نشان می‌دهد.
// اما سیستم ردیابی واکنشی Vue را پیاده‌سازی نمی‌کند.
