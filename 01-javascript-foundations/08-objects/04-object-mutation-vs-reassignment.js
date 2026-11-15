
/**
 * ============================================================
 * Object Mutation vs Reassignment
 * تغییر آبجکت در برابر اختصاص مجدد آبجکت
 *
 * English:
 * Mutation changes the properties of an existing object.
 * Reassignment makes a variable refer to a different object.
 *
 * فارسی:
 * Mutation یعنی تغییر پراپرتی‌های یک آبجکت موجود.
 * Reassignment یعنی متصل کردن یک متغیر به آبجکت دیگری.
 * ============================================================
 */


/**
 * 1. Object Mutation
 *
 * English:
 * We modify an existing object's property.
 * The object itself remains the same object.
 *
 * فارسی:
 * در اینجا مقدار یکی از پراپرتی‌های آبجکت موجود را تغییر می‌دهیم.
 * آبجکت جدیدی ساخته نمی‌شود.
 */

const user = {
  name: "Alex",
  age: 28
};

user.age = 30;

console.log(user.age); // 30


/**
 * 2. Object Reassignment
 *
 * English:
 * We assign a new object to the variable.
 * The variable now refers to a different object.
 *
 * فارسی:
 * در اینجا یک آبجکت جدید به متغیر اختصاص می‌دهیم.
 * از این لحظه متغیر به آبجکت جدید اشاره می‌کند.
 */

let userProfile = {
  name: "Alex",
  age: 28
};

userProfile = {
  name: "Sarah",
  age: 25
};

console.log(userProfile.name); // Sarah
console.log(userProfile.age);  // 25


/**
 * 3. Mutation Through Shared References
 *
 * English:
 * Both variables refer to the same object.
 * Mutating the object through one variable
 * is visible through the other variable.
 *
 * فارسی:
 * هر دو متغیر به یک آبجکت مشترک اشاره می‌کنند.
 * بنابراین تغییر آبجکت از طریق یکی از متغیرها
 * از طریق متغیر دیگر هم قابل مشاهده است.
 */

const user1 = {
  name: "Alex",
  age: 28
};

const user2 = user1;

user2.age = 35;

console.log(user1.age); // 35
console.log(user2.age); // 35


/**
 * 4. Reassignment Does Not Change Other References
 *
 * English:
 * Reassigning user1 does not change the object
 * that user2 refers to.
 *
 * فارسی:
 * وقتی user1 را به آبجکت جدیدی متصل می‌کنیم،
 * این کار روی مرجع user2 تأثیری ندارد.
 * user2 همچنان به آبجکت قبلی اشاره می‌کند.
 */

let firstUser = {
  name: "Alex"
};

let secondUser = firstUser;

firstUser = {
  name: "Sarah"
};

console.log(firstUser.name);  // Sarah
console.log(secondUser.name); // Alex


/**
 * 5. const and Object Mutation
 *
 * English:
 * const prevents reassignment of the variable.
 * It does not prevent changing or adding object properties.
 *
 * فارسی:
 * const مانع اختصاص مجدد مقدار به متغیر می‌شود.
 * اما مانع تغییر یا اضافه‌کردن پراپرتی‌های آبجکت نیست.
 */

const product = {
  name: "Laptop",
  price: 1200
};

// Modifying an existing property
// تغییر پراپرتی موجود
product.price = 1000;

// Adding a new property
// اضافه‌کردن پراپرتی جدید
product.brand = "Lenovo";

console.log(product.price); // 1000
console.log(product.brand); // Lenovo

// This causes a TypeError because product is declared with const.
// این دستور خطا ایجاد می‌کند، چون product با const تعریف شده است.

// product = {
//   name: "Monitor",
//   price: 500
// };


/**
 * 6. Real-world Example: Shared Object
 *
 * English:
 * Two parts of an application can access the same object.
 * If one part mutates that object, the other part
 * can observe the updated property.
 *
 * فارسی:
 * دو بخش مختلف یک برنامه می‌توانند به یک آبجکت مشترک دسترسی داشته باشند.
 * اگر یکی از آن‌ها پراپرتی آبجکت را تغییر دهد،
 * بخش دیگر نیز مقدار جدید را مشاهده می‌کند.
 */

const sharedSettings = {
  theme: "light",
  language: "English"
};

// Component A
// کامپوننت A
sharedSettings.theme = "dark";

// Component B
// کامپوننت B
console.log(sharedSettings.theme); // dark


/**
 * ============================================================
 * Key Takeaways
 * نکات کلیدی
 *
 * 1. Mutation changes an existing object.
 *    Mutation پراپرتی‌های آبجکت موجود را تغییر می‌دهد.
 *
 * 2. Reassignment changes what a variable refers to.
 *    Reassignment مرجع متغیر را به آبجکت دیگری تغییر می‌دهد.
 *
 * 3. Multiple variables can refer to the same object.
 *    چند متغیر می‌توانند به یک آبجکت مشترک اشاره کنند.
 *
 * 4. const prevents reassignment, not object mutation.
 *    const مانع تغییر مرجع متغیر می‌شود، نه تغییر پراپرتی‌های آبجکت.
 *
 * 5. Shared references explain why mutations are visible
 *    through multiple variables.
 *    مراجع مشترک توضیح می‌دهند چرا تغییرات از طریق چند متغیر
 *    قابل مشاهده هستند.
 * ============================================================
 */
