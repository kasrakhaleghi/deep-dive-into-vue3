/**
 * Hoisting with var, let, and const
 *
 * JavaScript processes variable declarations during the creation
 * phase of an Execution Context.
 *
 * var:
 * Variables declared with var are hoisted and initialized with
 * undefined during the creation phase.
 *
 * Therefore, they can be accessed before their declaration line,
 * but their value is undefined until the assignment is executed.
 *
 * let:
 * Variables declared with let are also hoisted, but they are not
 * initialized before their declaration is evaluated.
 *
 * Accessing them before initialization results in a ReferenceError.
 *
 * const:
 * Variables declared with const behave similarly to let regarding
 * hoisting. They are hoisted but cannot be accessed before
 * initialization.
 *
 * Important:
 * Hoisting does not physically move declarations to the top
 * of the source code. It describes how JavaScript processes
 * declarations before executing the code.
 */

/**
 * Hoisting در var، let و const
 *
 * جاوااسکریپت تعریف متغیرها را در مرحله ایجاد
 * Execution Context پردازش می‌کند.
 *
 * var:
 * متغیرهایی که با var تعریف می‌شوند، Hoist شده و در مرحله ایجاد
 * با مقدار اولیه undefined مقداردهی می‌شوند.
 *
 * به همین دلیل می‌توان قبل از خط تعریف به آن‌ها دسترسی داشت،
 * اما تا قبل از اجرای دستور مقداردهی، مقدارشان undefined است.
 *
 * let:
 * متغیرهایی که با let تعریف می‌شوند نیز Hoist می‌شوند،
 * اما قبل از رسیدن اجرای برنامه به محل تعریف آن‌ها،
 * مقداردهی اولیه نمی‌شوند.
 *
 * دسترسی به آن‌ها قبل از مقداردهی اولیه باعث ReferenceError می‌شود.
 *
 * const:
 * رفتار const از نظر Hoisting مشابه let است.
 * این متغیرها نیز Hoist می‌شوند، اما قبل از مقداردهی اولیه
 * قابل دسترسی نیستند.
 *
 * نکته مهم:
 * Hoisting به معنی انتقال فیزیکی تعریف متغیرها به ابتدای کد نیست.
 * این مفهوم نحوه پردازش تعریف‌ها توسط جاوااسکریپت
 * پیش از اجرای دستورات را توصیف می‌کند.
 */



// ==========================================
// 1. var Hoisting
// ==========================================

console.log("1. var:", username);
// Output: 1. var: undefined

var username = "User";

console.log("2. var after initialization:", username);
// Output: 2. var after initialization: User


// ==========================================
// 2. let Hoisting
// ==========================================

// console.log("3. let:", language);
// Output: ReferenceError
// Uncomment the line above to test it.

let language = "JavaScript";

console.log("4. let after initialization:", language);
// Output: 4. let after initialization: JavaScript


// ==========================================
// 3. const Hoisting
// ==========================================

// console.log("5. const:", framework);
// Output: ReferenceError
// Uncomment the line above to test it.

const framework = "Vue";

console.log("6. const after initialization:", framework);
// Output: 6. const after initialization: Vue


// ==========================================
// 4. Comparing all three
// ==========================================

console.log("7. var:", username);
// Output: 7. var: User

console.log("8. let:", language);
// Output: 8. let: JavaScript

console.log("9. const:", framework);
// Output: 9. const: Vue
