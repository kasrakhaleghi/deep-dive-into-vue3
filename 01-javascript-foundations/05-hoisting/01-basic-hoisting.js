/**
 * Hoisting
 *
 * Hoisting is a JavaScript behavior in which variable and function
 * declarations are processed during the creation phase of an
 * Execution Context, before code execution begins.
 *
 * Function Declarations:
 * Function declarations are available before their actual position
 * in the source code, so they can be called before their declaration.
 *
 * var Declarations:
 * Variables declared with var are initialized with undefined
 * during the creation phase.
 *
 * Their assigned values are processed later during code execution.
 *
 * Important:
 * Hoisting does not physically move code to the top of the file.
 * It describes how JavaScript handles declarations before execution.
 */


/**
 * بالاروی (Hoisting)
 *
 * Hoisting رفتاری در جاوااسکریپت است که طی آن تعریف متغیرها
 * و توابع در مرحله ایجاد Execution Context پردازش می‌شوند،
 * یعنی پیش از شروع اجرای دستورات.
 *
 * Function Declarations:
 * تعریف توابع با Function Declaration قبل از محل قرارگیری
 * آن‌ها در کد قابل دسترسی است.
 *
 * به همین دلیل می‌توانیم تابع را قبل از محل تعریف آن فراخوانی کنیم.
 *
 * var Declarations:
 * متغیرهایی که با var تعریف می‌شوند، در مرحله ایجاد
 * Execution Context با مقدار اولیه undefined مقداردهی می‌شوند.
 *
 * مقدار اختصاص‌یافته به آن‌ها بعداً و هنگام اجرای کد پردازش می‌شود.
 *
 * نکته مهم:
 * Hoisting به این معنی نیست که جاوااسکریپت کد را واقعاً
 * به ابتدای فایل منتقل می‌کند.
 *
 * این مفهوم نحوه پردازش تعریف‌ها توسط جاوااسکریپت
 * پیش از شروع اجرای کد را توصیف می‌کند.
 */



sayHello();

function sayHello() {
  console.log("Hello JavaScript!");
}

//Hello JavaScript!



console.log(username);

var username = "Kasra";
//undefined