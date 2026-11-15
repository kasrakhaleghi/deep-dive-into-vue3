
/**
 * ============================================================
 * Object Destructuring
 * استخراج پراپرتی‌های آبجکت
 *
 * English:
 * Object destructuring is a JavaScript syntax that allows
 * us to extract properties from an object and assign them
 * to variables in a concise way.
 *
 * فارسی:
 * Object Destructuring قابلیتی در جاوااسکریپت است که به ما
 * اجازه می‌دهد پراپرتی‌های یک آبجکت را استخراج کرده و
 * در متغیرهای جداگانه قرار دهیم.
 * ============================================================
 */


/**
 * 1. Basic Object Destructuring
 * استخراج ساده پراپرتی‌ها
 *
 * English:
 * We can extract multiple properties from an object
 * using a single destructuring statement.
 *
 * فارسی:
 * می‌توانیم چندین پراپرتی را با یک دستور از آبجکت استخراج کنیم.
 */

const user = {
  name: "Alex",
  age: 28,
  role: "Frontend Developer"
};

// Without destructuring
// بدون استفاده از Destructuring
const userName = user.name;
const userAge = user.age;
const userRole = user.role;

// With destructuring
// با استفاده از Destructuring
const { name, age, role } = user;

console.log(name); // Alex
console.log(age);  // 28
console.log(role); // Frontend Developer


/**
 * 2. Extracting Selected Properties
 * استخراج پراپرتی‌های انتخابی
 *
 * English:
 * We do not need to extract every property.
 * We can select only the properties we need.
 *
 * فارسی:
 * نیازی نیست تمام پراپرتی‌های آبجکت را استخراج کنیم.
 * فقط پراپرتی‌های موردنیاز را انتخاب می‌کنیم.
 */

const product = {
  name: "Laptop",
  price: 1500,
  brand: "Lenovo",
  stock: 20
};

const { price, brand } = product;

console.log(price); // 1500
console.log(brand); // Lenovo


/**
 * 3. Renaming Variables
 * تغییر نام متغیر هنگام استخراج
 *
 * English:
 * We can assign an extracted property to a variable
 * with a different name using the colon syntax.
 *
 * فارسی:
 * با استفاده از علامت : می‌توانیم مقدار یک پراپرتی را
 * در متغیری با نام متفاوت قرار دهیم.
 */

const developer = {
  name: "Sarah",
  experience: 4
};

const {
  name: developerName,
  experience: yearsOfExperience
} = developer;

console.log(developerName);       // Sarah
console.log(yearsOfExperience);  // 4

// The variable "name" is not created here.
// در این مثال متغیری به نام name ساخته نمی‌شود.
// Only "developerName" is created.
// فقط متغیر developerName ساخته می‌شود.


/**
 * 4. Default Values
 * مقادیر پیش‌فرض
 *
 * English:
 * We can provide a default value for a property.
 * The default value is used when the property is undefined
 * or does not exist.
 *
 * فارسی:
 * می‌توانیم برای پراپرتی‌ها مقدار پیش‌فرض تعریف کنیم.
 * اگر پراپرتی وجود نداشته باشد یا مقدار آن undefined باشد،
 * مقدار پیش‌فرض استفاده می‌شود.
 */

const account = {
  name: "John",
  age: undefined,
  country: null
};

const {
  name: accountName,
  age = 30,
  role = "Developer",
  country = "Germany"
} = account;

console.log(accountName); // John
console.log(age);         // 30
console.log(role);        // Developer
console.log(country);     // null

// Important:
// Default values are used for undefined, not null.
//
// نکته مهم:
// مقدار پیش‌فرض برای undefined اعمال می‌شود، نه null.


/**
 * 5. Nested Object Destructuring
 * استخراج از آبجکت‌های تو در تو
 *
 * English:
 * We can extract properties from nested objects
 * directly without creating intermediate variables.
 *
 * فارسی:
 * می‌توانیم پراپرتی‌های آبجکت‌های داخلی را مستقیماً
 * استخراج کنیم، بدون اینکه ابتدا آبجکت داخلی را جداگانه
 * در یک متغیر قرار دهیم.
 */

const employee = {
  name: "Alex",
  location: {
    city: "Berlin",
    country: "Germany"
  }
};

// Extract nested properties
// استخراج پراپرتی‌های آبجکت داخلی
const {
  location: { city, country }
} = employee;

console.log(city);    // Berlin
console.log(country); // Germany


/**
 * 6. Extracting Nested Object with Renaming
 * استخراج آبجکت داخلی همراه با تغییر نام
 *
 * English:
 * We can rename nested properties just like
 * normal object properties.
 *
 * فارسی:
 * می‌توانیم هنگام استخراج پراپرتی‌های داخلی نیز
 * نام متغیرها را تغییر دهیم.
 */

const customer = {
  name: "Sarah",
  address: {
    city: "Toronto",
    country: "Canada"
  }
};

const {
  address: {
    city: customerCity,
    country: customerCountry
  }
} = customer;

console.log(customerCity);    // Toronto
console.log(customerCountry); // Canada


/**
 * 7. Destructuring vs Traditional Property Access
 * مقایسه Destructuring با روش معمولی دسترسی به پراپرتی
 *
 * English:
 * Both approaches can access the same property.
 * Destructuring is especially useful when extracting
 * multiple properties from an object.
 *
 * فارسی:
 * هر دو روش می‌توانند به یک پراپرتی دسترسی داشته باشند.
 * Destructuring به‌خصوص زمانی مفید است که بخواهیم
 * چندین پراپرتی را از یک آبجکت استخراج کنیم.
 */

const profile = {
  name: "Alex",
  age: 28,
  role: "Frontend Developer"
};

// Traditional property access
// روش معمولی
const profileName = profile.name;
const profileAge = profile.age;

// Object destructuring
// روش Destructuring
const {
  name: extractedName,
  age: extractedAge
} = profile;

console.log(profileName);   // Alex
console.log(profileAge);    // 28
console.log(extractedName); // Alex
console.log(extractedAge);  // 28


/**
 * 8. Important: Destructuring Does Not Mean Cloning
 * نکته مهم: Destructuring به معنی کپی کامل آبجکت نیست
 *
 * English:
 * When we extract an object-valued property,
 * the new variable receives the same object reference.
 *
 * فارسی:
 * وقتی پراپرتی استخراج‌شده خودش یک آبجکت باشد،
 * متغیر جدید همان Reference آبجکت را دریافت می‌کند.
 */

const userProfile = {
  name: "Alex",
  settings: {
    theme: "light"
  }
};

const { settings } = userProfile;

settings.theme = "dark";

console.log(userProfile.settings.theme); // dark

// Both variables refer to the same nested object.
// هر دو به یک آبجکت داخلی مشترک اشاره می‌کنند.


/**
 * ============================================================
 * Key Takeaways
 * نکات کلیدی
 *
 * 1. Destructuring extracts properties into variables.
 *    پراپرتی‌ها را در متغیرهای جداگانه استخراج می‌کند.
 *
 * 2. We can extract only selected properties.
 *    می‌توانیم فقط پراپرتی‌های موردنیاز را استخراج کنیم.
 *
 * 3. We can rename extracted variables.
 *    می‌توانیم نام متغیرهای استخراج‌شده را تغییر دهیم.
 *
 * 4. We can define default values.
 *    می‌توانیم مقادیر پیش‌فرض تعریف کنیم.
 *
 * 5. We can extract nested properties.
 *    می‌توانیم پراپرتی‌های آبجکت‌های تو در تو را استخراج کنیم.
 *
 * 6. Destructuring an object-valued property does not clone it.
 *    استخراج یک پراپرتی آبجکتی باعث Clone شدن آن نمی‌شود.
 * ============================================================
 */
