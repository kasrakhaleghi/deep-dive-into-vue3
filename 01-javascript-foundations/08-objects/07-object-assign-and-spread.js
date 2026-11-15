
/**
 * ============================================================
 * Object Copying and Copy Depth
 * کپی آبجکت‌ها و عمق کپی در JavaScript
 *
 * English:
 * JavaScript provides different ways to copy objects.
 * These methods can create shallow copies or deep copies.
 *
 * فارسی:
 * جاوااسکریپت روش‌های مختلفی برای کپی آبجکت‌ها دارد.
 * این روش‌ها می‌توانند کپی سطحی یا کپی عمیق ایجاد کنند.
 *
 * Main Concepts:
 * 1. Object.assign()
 * 2. Spread Operator
 * 3. Shallow Copy
 * 4. Deep Copy
 * ============================================================
 */


/**
 * 1. Object.assign()
 *
 * English:
 * Object.assign() copies enumerable own properties
 * from one or more source objects into a target object.
 *
 * فارسی:
 * Object.assign() پراپرتی‌های مستقیم و قابل شمارش
 * یک یا چند آبجکت مبدأ را به آبجکت مقصد کپی می‌کند.
 */

{
  const user = {
    name: "Alex",
    age: 28
  };

  // Create a new object and copy properties into it.
  // ایجاد آبجکت جدید و کپی‌کردن پراپرتی‌ها در آن.
  const copiedUser = Object.assign({}, user);

  console.log(copiedUser);
  // { name: "Alex", age: 28 }

  console.log(user === copiedUser);
  // false

  // Both variables refer to different outer objects.
  // هر دو متغیر به آبجکت‌های بیرونی متفاوتی اشاره می‌کنند.
}


/**
 * 2. Object.assign() with Multiple Objects
 *
 * English:
 * Object.assign() can copy properties from multiple
 * source objects into a single target object.
 *
 * فارسی:
 * Object.assign() می‌تواند پراپرتی‌های چند آبجکت مبدأ
 * را در یک آبجکت مقصد ترکیب کند.
 */

{
  const userInfo = {
    name: "Alex",
    age: 28
  };

  const userRole = {
    role: "Frontend Developer",
    country: "Germany"
  };

  const user = Object.assign({}, userInfo, userRole);

  console.log(user);

  /*
  {
    name: "Alex",
    age: 28,
    role: "Frontend Developer",
    country: "Germany"
  }
  */
}


/**
 * 3. Object.assign() and Existing Properties
 *
 * English:
 * If multiple source objects contain the same property,
 * the value from the later source object overwrites
 * the previous value.
 *
 * فارسی:
 * اگر چند آبجکت مبدأ پراپرتی هم‌نام داشته باشند،
 * مقدار آبجکت مبدأ آخری جایگزین مقدار قبلی می‌شود.
 */

{
  const defaultSettings = {
    theme: "light",
    language: "English"
  };

  const userSettings = {
    theme: "dark"
  };

  const settings = Object.assign(
    {},
    defaultSettings,
    userSettings
  );

  console.log(settings);

  // { theme: "dark", language: "English" }
}


/**
 * 4. Spread Operator
 *
 * English:
 * The spread syntax expands an object's own enumerable
 * properties into a new object.
 *
 * فارسی:
 * Spread Operator پراپرتی‌های قابل شمارش آبجکت را
 * در یک آبجکت جدید گسترش می‌دهد.
 */

{
  const user = {
    name: "Alex",
    age: 28
  };

  const copiedUser = { ...user };

  console.log(copiedUser);
  // { name: "Alex", age: 28 }

  console.log(user === copiedUser);
  // false
}


/**
 * 5. Spread Operator with Multiple Objects
 *
 * English:
 * We can merge multiple objects using spread syntax.
 *
 * فارسی:
 * با استفاده از Spread Operator می‌توانیم
 * چند آبجکت را با یکدیگر ترکیب کنیم.
 */

{
  const userInfo = {
    name: "Sarah",
    age: 30
  };

  const userRole = {
    role: "Developer",
    country: "Canada"
  };

  const user = {
    ...userInfo,
    ...userRole
  };

  console.log(user);

  /*
  {
    name: "Sarah",
    age: 30,
    role: "Developer",
    country: "Canada"
  }
  */
}


/**
 * 6. Spread Operator and Property Overwriting
 *
 * English:
 * When the same property exists in multiple objects,
 * the last occurrence determines the final value.
 *
 * فارسی:
 * وقتی یک پراپرتی در چند آبجکت وجود داشته باشد،
 * آخرین مقدار تعریف‌شده در آبجکت نهایی قرار می‌گیرد.
 */

{
  const defaultSettings = {
    theme: "light",
    language: "English"
  };

  const userSettings = {
    theme: "dark"
  };

  const settings = {
    ...defaultSettings,
    ...userSettings
  };

  console.log(settings);

  // { theme: "dark", language: "English" }
}


/**
 * 7. Shallow Copy
 *
 * English:
 * A shallow copy creates a new outer object.
 * However, nested objects are not independently copied.
 * Their references are shared between the original
 * and copied objects.
 *
 * فارسی:
 * Shallow Copy یک آبجکت بیرونی جدید ایجاد می‌کند.
 * اما آبجکت‌های داخلی به صورت مستقل کپی نمی‌شوند.
 * Reference آن‌ها بین آبجکت اصلی و کپی‌شده مشترک است.
 */

{
  const user = {
    name: "Alex",
    address: {
      city: "Berlin"
    }
  };

  const copiedUser = { ...user };

  // Change a top-level property.
  // تغییر یک پراپرتی در سطح اول.
  copiedUser.name = "Sarah";

  console.log(user.name);
  // Alex

  console.log(copiedUser.name);
  // Sarah

  // The top-level properties are independent.
  // پراپرتی‌های سطح اول مستقل هستند.

  // Change a nested property.
  // تغییر یک پراپرتی در آبجکت داخلی.
  copiedUser.address.city = "Toronto";

  console.log(user.address.city);
  // Toronto

  console.log(copiedUser.address.city);
  // Toronto

  // Both objects share the same nested object reference.
  // هر دو آبجکت Reference مشترکی به آبجکت داخلی دارند.

  console.log(user.address === copiedUser.address);
  // true
}


/**
 * 8. Object.assign() Also Creates a Shallow Copy
 *
 * English:
 * Object.assign() also performs a shallow copy.
 * Nested object references remain shared.
 *
 * فارسی:
 * Object.assign() نیز کپی سطحی انجام می‌دهد.
 * Reference آبجکت‌های داخلی همچنان مشترک باقی می‌ماند.
 */

{
  const product = {
    name: "Laptop",
    details: {
      price: 1200
    }
  };

  const copiedProduct = Object.assign({}, product);

  copiedProduct.details.price = 900;

  console.log(product.details.price);
  // 900

  console.log(copiedProduct.details.price);
  // 900

  console.log(product.details === copiedProduct.details);
  // true
}


/**
 * 9. Deep Copy with structuredClone()
 *
 * English:
 * structuredClone() creates a deep copy of supported
 * JavaScript values.
 * Nested objects are also cloned independently.
 *
 * فارسی:
 * structuredClone() از مقادیر پشتیبانی‌شده
 * یک کپی عمیق ایجاد می‌کند.
 * آبجکت‌های داخلی نیز به صورت مستقل کپی می‌شوند.
 */

{
  const user = {
    name: "Alex",
    address: {
      city: "Berlin",
      country: "Germany"
    }
  };

  const copiedUser = structuredClone(user);

  copiedUser.address.city = "Toronto";

  console.log(user.address.city);
  // Berlin

  console.log(copiedUser.address.city);
  // Toronto

  console.log(user === copiedUser);
  // false

  console.log(user.address === copiedUser.address);
  // false
}


/**
 * 10. Shallow Copy vs Deep Copy
 *
 * English:
 * Shallow Copy:
 * Creates a new outer object but keeps nested
 * object references shared.
 *
 * Deep Copy:
 * Creates independent copies of nested objects
 * in the supported data structure.
 *
 * فارسی:
 * کپی سطحی:
 * یک آبجکت بیرونی جدید ایجاد می‌کند، اما Reference
 * آبجکت‌های داخلی را مشترک نگه می‌دارد.
 *
 * کپی عمیق:
 * آبجکت‌های داخلی را نیز به صورت مستقل کپی می‌کند.
 */

{
  const original = {
    name: "Alex",
    settings: {
      theme: "dark"
    }
  };

  // Shallow Copy
  // کپی سطحی
  const shallowCopy = { ...original };

  // Deep Copy
  // کپی عمیق
  const deepCopy = structuredClone(original);

  console.log(original === shallowCopy);
  // false

  console.log(original.settings === shallowCopy.settings);
  // true

  console.log(original === deepCopy);
  // false

  console.log(original.settings === deepCopy.settings);
  // false
}


/**
 * 11. Important: Object.assign() Target Object
 *
 * English:
 * Object.assign() modifies the target object.
 * If we pass an existing object as the target,
 * its properties will be updated.
 *
 * فارسی:
 * Object.assign() آبجکت مقصد را تغییر می‌دهد.
 * اگر یک آبجکت موجود را به عنوان مقصد ارسال کنیم،
 * پراپرتی‌های آن به‌روزرسانی می‌شوند.
 */

{
  const target = {
    name: "Alex",
    age: 25
  };

  const source = {
    age: 30,
    role: "Developer"
  };

  const result = Object.assign(target, source);

  console.log(result);

  /*
  {
    name: "Alex",
    age: 30,
    role: "Developer"
  }
  */

  console.log(result === target);
  // true
}


/**
 * ============================================================
 * Key Takeaways
 * نکات کلیدی
 *
 * Object.assign():
 * Copies properties into a target object.
 * پراپرتی‌ها را به آبجکت مقصد کپی می‌کند.
 *
 * Spread Operator:
 * Expands object properties into a new object.
 * پراپرتی‌های آبجکت را در آبجکت جدید گسترش می‌دهد.
 *
 * Shallow Copy:
 * Creates a new outer object but shares nested references.
 * آبجکت بیرونی جدید می‌سازد اما Reference داخلی مشترک است.
 *
 * Deep Copy:
 * Creates independent copies of nested supported values.
 * مقادیر داخلی پشتیبانی‌شده را نیز مستقل کپی می‌کند.
 *
 * Important:
 * Object.assign() and Spread Operator normally perform
 * shallow copies, not deep copies.
 *
 * نکته مهم:
 * Object.assign() و Spread Operator به طور معمول
 * کپی سطحی انجام می‌دهند، نه کپی عمیق.
 * ============================================================
 */
