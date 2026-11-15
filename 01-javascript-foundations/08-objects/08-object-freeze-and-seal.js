/**
 * Object.freeze() vs Object.seal()
 *
 * English:
 * Object.freeze() and Object.seal() are used to restrict modifications
 * to JavaScript objects.
 *
 * فارسی:
 * از Object.freeze() و Object.seal() برای محدود کردن تغییرات
 * روی آبجکت‌ها در جاوااسکریپت استفاده می‌کنیم.
 */

// =====================================================
// 1. Object.freeze()
// =====================================================

/**
 * English:
 * Object.freeze() prevents adding, deleting, or modifying
 * the existing properties of an object.
 *
 * فارسی:
 * Object.freeze() اجازه اضافه کردن، حذف کردن یا تغییر مقدار
 * پراپرتی‌های موجود آبجکت را نمی‌دهد.
 */

const product = {
    name: "Laptop",
    price: 1200
};

Object.freeze(product);

// Modifying an existing property
// تغییر مقدار یک پراپرتی موجود
product.price = 900;

// Adding a new property
// اضافه کردن یک پراپرتی جدید
product.brand = "Dell";

// Deleting an existing property
// حذف یک پراپرتی موجود
delete product.name;

console.log(product);
// { name: "Laptop", price: 1200 }


// =====================================================
// 2. Object.seal()
// =====================================================

/**
 * English:
 * Object.seal() prevents adding or deleting properties,
 * but allows modifying existing writable properties.
 *
 * فارسی:
 * Object.seal() اجازه اضافه کردن یا حذف پراپرتی را نمی‌دهد،
 * اما امکان تغییر مقدار پراپرتی‌های موجود را فراهم می‌کند.
 */

const user = {
    name: "Alex",
    age: 28
};

Object.seal(user);

// Modifying an existing property
// تغییر مقدار یک پراپرتی موجود
user.age = 30;

// Adding a new property
// اضافه کردن پراپرتی جدید
user.role = "Developer";

// Deleting an existing property
// حذف پراپرتی موجود
delete user.name;

console.log(user);
// { name: "Alex", age: 30 }


// =====================================================
// 3. Shallow Freeze
// =====================================================

/**
 * English:
 * Object.freeze() is shallow.
 * It freezes only the object's own properties,
 * not nested objects.
 *
 * فارسی:
 * Object.freeze() به‌صورت سطحی عمل می‌کند.
 * یعنی فقط پراپرتی‌های مستقیم آبجکت را فریز می‌کند
 * و آبجکت‌های تو در تو همچنان قابل تغییر هستند.
 */

const employee = {
    name: "Sarah",
    address: {
        city: "Berlin"
    }
};

Object.freeze(employee);

// This modification is allowed
// این تغییر مجاز است
employee.address.city = "Toronto";

console.log(employee.address.city);
// "Toronto"

// This modification is not allowed
// این تغییر مجاز نیست
employee.name = "John";

console.log(employee.name);
// "Sarah"


// =====================================================
// 4. Object.isFrozen()
// =====================================================

/**
 * English:
 * Object.isFrozen() checks whether an object is frozen.
 *
 * فارسی:
 * متد Object.isFrozen() بررسی می‌کند که آیا آبجکت فریز شده است یا خیر.
 */

const settings = {
    theme: "dark"
};

Object.freeze(settings);

console.log(Object.isFrozen(settings));
// true


// =====================================================
// 5. Object.isSealed()
// =====================================================

/**
 * English:
 * Object.isSealed() checks whether an object is sealed.
 *
 * فارسی:
 * متد Object.isSealed() بررسی می‌کند که آیا آبجکت مهر و موم شده است یا خیر.
 */

const account = {
    username: "alex",
    active: true
};

Object.seal(account);

console.log(Object.isSealed(account));
// true


// =====================================================
// 6. Object.isExtensible()
// =====================================================

/**
 * English:
 * Object.isExtensible() checks whether new properties
 * can be added to an object.
 *
 * فارسی:
 * متد Object.isExtensible() بررسی می‌کند که آیا امکان
 * اضافه کردن پراپرتی جدید به آبجکت وجود دارد یا خیر.
 */

const settings2 = {
    language: "English"
};

console.log(Object.isExtensible(settings2));
// true

Object.seal(settings2);

console.log(Object.isExtensible(settings2));
// false


// =====================================================
// 7. Comparing freeze and seal
// =====================================================

/**
 * English:
 *
 * Object.freeze():
 * - Cannot add new properties.
 * - Cannot delete existing properties.
 * - Cannot modify existing data properties.
 *
 * Object.seal():
 * - Cannot add new properties.
 * - Cannot delete existing properties.
 * - Can modify existing writable properties.
 *
 * فارسی:
 *
 * Object.freeze():
 * - امکان اضافه کردن پراپرتی جدید وجود ندارد.
 * - امکان حذف پراپرتی‌های موجود وجود ندارد.
 * - امکان تغییر مقدار پراپرتی‌های موجود وجود ندارد.
 *
 * Object.seal():
 * - امکان اضافه کردن پراپرتی جدید وجود ندارد.
 * - امکان حذف پراپرتی‌های موجود وجود ندارد.
 * - امکان تغییر مقدار پراپرتی‌های موجود وجود دارد.
 */


// =====================================================
// 8. Important relationship
// =====================================================

/**
 * English:
 * A frozen object is also sealed and non-extensible.
 *
 * فارسی:
 * یک آبجکت فریز شده، هم‌زمان sealed و non-extensible نیز هست.
 */

const config = {
    mode: "production"
};

Object.freeze(config);

console.log(Object.isFrozen(config));
// true

console.log(Object.isSealed(config));
// true

console.log(Object.isExtensible(config));
// false