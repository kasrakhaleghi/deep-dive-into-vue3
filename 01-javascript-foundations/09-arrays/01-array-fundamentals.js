/**
 * ============================================
 * JavaScript Array Fundamentals
 * مبانی آرایه‌ها در جاوااسکریپت
 * ============================================
 */

// --------------------------------------------
// 1. Creating an Array
// 1. ساخت آرایه
// --------------------------------------------

/**
 * English:
 * An array is an ordered collection of elements.
 * Each element has a numeric index, starting from 0.
 *
 * فارسی:
 * آرایه مجموعه‌ای مرتب از عناصر است.
 * هر عنصر یک اندیس عددی دارد که از صفر شروع می‌شود.
 */

{
    const products = ["Laptop", "Phone", "Tablet"];

    console.log(products[0]); // Laptop
    console.log(products[1]); // Phone
    console.log(products[2]); // Tablet
}


// --------------------------------------------
// 2. Array Length
// 2. طول آرایه
// --------------------------------------------

/**
 * English:
 * The length property returns the number of elements
 * in an array.
 *
 * فارسی:
 * ویژگی length تعداد عناصر موجود در آرایه را برمی‌گرداند.
 */

{
    const products = ["Laptop", "Phone", "Tablet"];

    console.log(products.length); // 3

    // Accessing the last element
    // دسترسی به آخرین عنصر
    console.log(products[products.length - 1]); // Tablet

    // Using at() with a negative index
    // استفاده از at با اندیس منفی
    console.log(products.at(-1)); // Tablet
}


// --------------------------------------------
// 3. Arrays Are Mutable
// 3. آرایه‌ها قابل تغییر هستند
// --------------------------------------------

/**
 * English:
 * Arrays are mutable, which means their elements
 * can be modified after creation.
 *
 * The const keyword prevents reassignment of the
 * variable, but it does not prevent array mutation.
 *
 * فارسی:
 * آرایه‌ها Mutable هستند؛ یعنی پس از ساخته شدن
 * می‌توان عناصر آن‌ها را تغییر داد.
 *
 * کلمه const مانع انتساب مجدد متغیر می‌شود،
 * اما جلوی تغییر محتوای آرایه را نمی‌گیرد.
 */

{
    const products = ["Laptop", "Phone", "Tablet"];

    // Modifying an existing element
    // تغییر یک عنصر موجود
    products[1] = "Keyboard";

    // Adding an element at the end by index
    // اضافه کردن عنصر با استفاده از اندیس
    products[3] = "Monitor";

    console.log(products);
    // ["Laptop", "Keyboard", "Tablet", "Monitor"]

    // This would cause an error:
    // این دستور باعث خطا می‌شود:
    // products = ["Mouse"];
}


// --------------------------------------------
// 4. Mixed Data Types
// 4. انواع داده مختلف در آرایه
// --------------------------------------------

/**
 * English:
 * JavaScript arrays can contain different data types,
 * including strings, numbers, booleans, objects,
 * functions, and even other arrays.
 *
 * فارسی:
 * آرایه‌های جاوااسکریپت می‌توانند انواع داده مختلفی
 * مانند رشته، عدد، بولین، آبجکت، تابع و حتی آرایه‌های
 * دیگر را در خود نگهداری کنند.
 */

{
    const userData = [
        "Alex",
        28,
        true,
        { role: "Frontend Developer" },
        ["JavaScript", "Vue"]
    ];

    console.log(userData[0]);       // Alex
    console.log(userData[1]);       // 28
    console.log(userData[2]);       // true
    console.log(userData[3].role);  // Frontend Developer
    console.log(userData[4][0]);    // JavaScript
}


// --------------------------------------------
// 5. Checking Whether a Value Is an Array
// 5. بررسی آرایه بودن یک مقدار
// --------------------------------------------

/**
 * English:
 * The typeof operator returns "object" for arrays.
 * This is because arrays are a special type of object
 * in JavaScript.
 *
 * Array.isArray() is the reliable way to check
 * whether a value is an array.
 *
 * فارسی:
 * عملگر typeof برای آرایه‌ها مقدار "object" را برمی‌گرداند،
 * زیرا آرایه‌ها نوع خاصی از آبجکت در جاوااسکریپت هستند.
 *
 * روش مطمئن برای بررسی آرایه بودن یک مقدار،
 * استفاده از Array.isArray() است.
 */

{
    const products = ["Laptop", "Phone", "Tablet"];

    console.log(typeof products);
    // "object"

    console.log(Array.isArray(products));
    // true

    console.log(Array.isArray({ name: "Alex" }));
    // false
}


// --------------------------------------------
// 6. Sparse Arrays
// 6. آرایه‌های دارای خانه‌های خالی
// --------------------------------------------

/**
 * English:
 * Assigning a value to an index beyond the current
 * array length increases the length of the array.
 *
 * The indexes between the previous end and the new
 * index become empty slots.
 *
 * فارسی:
 * اگر مقداری را به اندیسی بزرگ‌تر از طول فعلی آرایه
 * اختصاص دهیم، طول آرایه افزایش پیدا می‌کند.
 *
 * اندیس‌های بین آخرین عنصر قبلی و اندیس جدید،
 * به صورت خانه‌های خالی باقی می‌مانند.
 */

{
    const products = ["Laptop", "Phone", "Tablet"];

    products[5] = "Mouse";

    console.log(products.length);
    // 6

    console.log(products[3]);
    // undefined

    console.log(products[4]);
    // undefined

    console.log(products[5]);
    // Mouse

    console.log(products);
    // ["Laptop", "Phone", "Tablet", empty × 2, "Mouse"]
}