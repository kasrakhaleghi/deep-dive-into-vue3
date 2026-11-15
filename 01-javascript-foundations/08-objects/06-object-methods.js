
/**
 * ============================================================
 * JavaScript Object Methods
 * متدهای کاربردی آبجکت در جاوااسکریپت
 *
 * English:
 * JavaScript provides built-in methods to retrieve
 * an object's keys, values, and key-value pairs.
 *
 * فارسی:
 * جاوااسکریپت متدهای داخلی مختلفی برای دریافت کلیدها،
 * مقادیر و زوج‌های کلید و مقدار آبجکت در اختیار ما قرار می‌دهد.
 * ============================================================
 */


/**
 * 1. Object.keys()
 *
 * English:
 * Object.keys() returns an array containing the names
 * of an object's own enumerable properties.
 *
 * فارسی:
 * Object.keys() آرایه‌ای از نام پراپرتی‌های مستقیم
 * و قابل شمارش آبجکت برمی‌گرداند.
 */

{
  const developer = {
    name: "Sarah",
    age: 30,
    skills: "Vue"
  };

  const keys = Object.keys(developer);

  console.log(keys);
  // ["name", "age", "skills"]
}


/**
 * 2. Object.values()
 *
 * English:
 * Object.values() returns an array containing
 * the values of an object's own enumerable properties.
 *
 * فارسی:
 * Object.values() آرایه‌ای از مقادیر پراپرتی‌های مستقیم
 * و قابل شمارش آبجکت برمی‌گرداند.
 */

{
  const developer = {
    name: "Sarah",
    age: 30,
    skills: "Vue"
  };

  const values = Object.values(developer);

  console.log(values);
  // ["Sarah", 30, "Vue"]
}


/**
 * 3. Object.entries()
 *
 * English:
 * Object.entries() returns an array of key-value pairs.
 * Each pair is represented as a two-element array.
 *
 * فارسی:
 * Object.entries() آرایه‌ای از زوج‌های کلید و مقدار
 * برمی‌گرداند.
 * هر زوج شامل یک آرایه دو عضوی است.
 */

{
  const developer = {
    name: "Sarah",
    age: 30,
    skills: "Vue"
  };

  const entries = Object.entries(developer);

  console.log(entries);

  /*
  [
    ["name", "Sarah"],
    ["age", 30],
    ["skills", "Vue"]
  ]
  */

  console.log(entries[0]);
  // ["name", "Sarah"]

  console.log(entries[0][0]);
  // "name"

  console.log(entries[0][1]);
  // "Sarah"
}


/**
 * 4. Object.keys() and Array Length
 *
 * English:
 * We can use the length property to get the number
 * of keys returned by Object.keys().
 *
 * فارسی:
 * با استفاده از length می‌توانیم تعداد کلیدهای
 * استخراج‌شده توسط Object.keys() را به دست آوریم.
 */

{
  const settings = {
    theme: "dark",
    language: "English"
  };

  const keys = Object.keys(settings);

  console.log(keys.length);
  // 2
}


/**
 * 5. Iterating Through Object.entries()
 *
 * English:
 * We can use a for...of loop with destructuring
 * to access each key and value separately.
 *
 * فارسی:
 * می‌توانیم با استفاده از حلقه for...of و Destructuring
 * به کلید و مقدار هر پراپرتی به صورت جداگانه دسترسی داشته باشیم.
 */

{
  const user = {
    name: "Alex",
    age: 28,
    role: "Frontend Developer"
  };

  for (const [key, value] of Object.entries(user)) {
    console.log("Key:", key);
    console.log("Value:", value);
  }

  /*
  Key: name
  Value: Alex

  Key: age
  Value: 28

  Key: role
  Value: Frontend Developer
  */
}


/**
 * 6. Using Object.entries() with forEach()
 *
 * English:
 * Object.entries() also works with forEach().
 * Each iteration provides a key-value pair.
 *
 * فارسی:
 * می‌توانیم از forEach() نیز برای پیمایش خروجی
 * Object.entries() استفاده کنیم.
 */

{
  const product = {
    name: "Laptop",
    price: 1200,
    stock: 10
  };

  Object.entries(product).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });

  /*
  name: Laptop
  price: 1200
  stock: 10
  */
}


/**
 * 7. Practical Example: Calculating Total Price
 *
 * English:
 * We can use Object.values() with reduce()
 * to calculate the total of numeric object values.
 *
 * فارسی:
 * می‌توانیم از Object.values() همراه با reduce()
 * برای محاسبه مجموع مقادیر عددی یک آبجکت استفاده کنیم.
 */

{
  const cart = {
    laptop: 1200,
    mouse: 50,
    keyboard: 100
  };

  const totalPrice = Object.values(cart).reduce(
    (total, price) => total + price,
    0
  );

  console.log(totalPrice);
  // 1350
}


/**
 * 8. Important: These Methods Do Not Return Nested Properties
 *
 * English:
 * Object.keys(), Object.values(), and Object.entries()
 * only retrieve the object's own properties.
 * They do not recursively extract nested object properties.
 *
 * فارسی:
 * این سه متد فقط پراپرتی‌های مستقیم آبجکت را استخراج می‌کنند.
 * آن‌ها به صورت بازگشتی وارد آبجکت‌های داخلی نمی‌شوند.
 */

{
  const user = {
    name: "Alex",
    address: {
      city: "Berlin",
      country: "Germany"
    }
  };

  console.log(Object.keys(user));

  // ["name", "address"]

  console.log(Object.values(user));

  // ["Alex", { city: "Berlin", country: "Germany" }]

  console.log(Object.entries(user));

  /*
  [
    ["name", "Alex"],
    ["address", { city: "Berlin", country: "Germany" }]
  ]
  */
}


/**
 * ============================================================
 * Key Takeaways
 * نکات کلیدی
 *
 * Object.keys()
 * Returns property names.
 * نام پراپرتی‌ها را برمی‌گرداند.
 *
 * Object.values()
 * Returns property values.
 * مقادیر پراپرتی‌ها را برمی‌گرداند.
 *
 * Object.entries()
 * Returns key-value pairs.
 * زوج‌های کلید و مقدار را برمی‌گرداند.
 *
 * for...of
 * Iterates through iterable values.
 * برای پیمایش مقادیر قابل پیمایش استفاده می‌شود.
 *
 * Destructuring
 * Extracts key and value from each entry.
 * کلید و مقدار را از هر زوج استخراج می‌کند.
 * ============================================================
 */
