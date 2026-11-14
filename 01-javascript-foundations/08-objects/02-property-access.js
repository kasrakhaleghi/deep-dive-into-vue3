
/**
 * JavaScript Property Access
 *
 * دسترسی به Propertyهای آبجکت در جاوااسکریپت
 *
 * English:
 * This file demonstrates Dot Notation, Bracket Notation,
 * dynamic property access, and accessing special property names.
 *
 * فارسی:
 * این فایل روش‌های Dot Notation، Bracket Notation،
 * دسترسی پویا به Propertyها و دسترسی به نام‌های خاص Property را بررسی می‌کند.
 */

// --------------------------------------------------
// 1. Dot Notation
// 1. دسترسی با Dot Notation
// --------------------------------------------------

/**
 * English:
 * Dot notation accesses an object property by writing
 * a dot followed by the property name.
 *
 * فارسی:
 * در Dot Notation با نوشتن نقطه و سپس نام Property
 * به مقدار آن دسترسی پیدا می‌کنیم.
 */

const user = {
  name: "Alex",
  age: 28,
  role: "Frontend Developer"
};

console.log(user.name); // Alex
console.log(user.age);  // 28
console.log(user.role); // Frontend Developer


// --------------------------------------------------
// 2. Bracket Notation
// 2. دسترسی با Bracket Notation
// --------------------------------------------------

/**
 * English:
 * Bracket notation accesses an object property
 * using square brackets and a property key.
 *
 * فارسی:
 * در Bracket Notation با استفاده از کروشه
 * و نام Property به مقدار آن دسترسی پیدا می‌کنیم.
 */

console.log(user["name"]); // Alex
console.log(user["age"]);  // 28


// --------------------------------------------------
// 3. Variable-Based Property Access
// 3. دسترسی به Property از طریق متغیر
// --------------------------------------------------

/**
 * English:
 * Dot notation looks for the exact property name
 * written after the dot.
 *
 * Bracket notation evaluates the expression inside
 * the brackets and uses its result as the property key.
 *
 * فارسی:
 * Dot Notation دقیقاً به دنبال نام Property نوشته‌شده
 * بعد از نقطه می‌گردد.
 *
 * Bracket Notation ابتدا عبارت داخل کروشه را ارزیابی می‌کند
 * و نتیجه آن را به‌عنوان نام Property استفاده می‌کند.
 */

const propertyName = "name";

console.log(user.propertyName);  // undefined
console.log(user[propertyName]); // Alex


// --------------------------------------------------
// 4. Dynamic Property Access
// 4. دسترسی پویا به Propertyها
// --------------------------------------------------

/**
 * English:
 * Bracket notation allows dynamic property access.
 * The property name can be passed through a variable
 * or determined at runtime.
 *
 * فارسی:
 * Bracket Notation امکان دسترسی پویا به Propertyها را فراهم می‌کند.
 * نام Property می‌تواند از طریق یک متغیر دریافت شود
 * یا هنگام اجرای برنامه مشخص شود.
 */

const product = {
  name: "Laptop",
  price: 1200,
  stock: 15
};

/**
 * English:
 * Returns an object property using a dynamic key.
 *
 * فارسی:
 * یک ویژگی از آبجکت را با استفاده از یک کلید پویا برمی‌گرداند.
 */
function getProperty(object, key) {
  return object[key];
}

console.log(getProperty(product, "name"));  // Laptop
console.log(getProperty(product, "price")); // 1200
console.log(getProperty(product, "stock")); // 15


// --------------------------------------------------
// 5. Property Names with Special Characters
// 5. نام Propertyهای دارای کاراکتر خاص
// --------------------------------------------------

/**
 * English:
 * Bracket notation is required when accessing property names
 * that contain spaces or characters that are not valid
 * in dot notation.
 *
 * فارسی:
 * برای دسترسی به Propertyهایی که نام آن‌ها شامل فاصله
 * یا کاراکترهای غیرمجاز در Dot Notation است،
 * باید از Bracket Notation استفاده کنیم.
 */

const profile = {
  name: "Alex",
  "first name": "Alex",
  "user-role": "Developer"
};

console.log(profile.name);          // Alex
console.log(profile["first name"]); // Alex
console.log(profile["user-role"]);  // Developer


// --------------------------------------------------
// 6. Practical Example: Dynamic Form Data
// 6. مثال کاربردی: دسترسی پویا به اطلاعات فرم
// --------------------------------------------------

/**
 * English:
 * Bracket notation is useful when working with dynamic
 * form fields because field names can be stored in variables.
 *
 * فارسی:
 * Bracket Notation هنگام کار با فیلدهای پویا در فرم کاربرد دارد؛
 * زیرا نام فیلدها را می‌توان در متغیرها ذخیره کرد
 * و از طریق آن‌ها به مقادیر آبجکت دسترسی داشت.
 */

const formData = {
  username: "Alex",
  email: "alex@example.com",
  password: "123456"
};

const selectedField = "email";

/**
 * English:
 * Retrieves a form field value using its dynamic name.
 *
 * فارسی:
 * مقدار یک فیلد فرم را با استفاده از نام پویای آن دریافت می‌کند.
 */
function getFormValue(data, fieldName) {
  return data[fieldName];
}

console.log(getFormValue(formData, selectedField));
// alex@example.com


// --------------------------------------------------
// 7. Comparing Dot and Bracket Notation
// 7. مقایسه Dot Notation و Bracket Notation
// --------------------------------------------------

/**
 * English:
 * Dot notation is suitable for direct property access.
 * Bracket notation is useful for dynamic keys and
 * property names containing special characters.
 *
 * فارسی:
 * Dot Notation برای دسترسی مستقیم به Propertyها مناسب است.
 * Bracket Notation برای کلیدهای پویا و نام‌هایی که
 * دارای کاراکترهای خاص هستند کاربرد دارد.
 */

const settings = {
  theme: "dark",
  language: "English",
  fontSize: 16
};

const selectedProperty = "theme";

console.log(settings.selectedProperty); // undefined
console.log(settings[selectedProperty]); // dark

// Both notations can access a regular property
// هر دو روش می‌توانند به یک Property معمولی دسترسی داشته باشند

console.log(settings.theme);    // dark
console.log(settings["theme"]); // dark
