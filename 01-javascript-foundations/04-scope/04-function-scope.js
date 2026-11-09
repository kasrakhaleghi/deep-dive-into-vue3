/**
 * Function Scope
 *
 * Function Scope defines the accessibility of variables
 * within the function in which they are declared.
 *
 * Variables declared with var, let, and const inside a function
 * cannot be accessed from outside that function.
 *
 * var:
 * Variables declared with var are function-scoped.
 * They are accessible throughout the function, including
 * inside nested blocks.
 *
 * let and const:
 * Variables declared with let and const are block-scoped.
 * They are accessible only within the block in which
 * they are declared and its nested scopes.
 *
 * Important:
 * var is not restricted to block scope, but it is restricted
 * to function scope when declared inside a function.
 */

/**
 * محدوده تابع (Function Scope)
 *
 * Function Scope محدوده دسترسی متغیرهایی را مشخص می‌کند
 * که درون یک تابع تعریف شده‌اند.
 *
 * متغیرهایی که با var، let و const داخل یک تابع تعریف می‌شوند،
 * از خارج آن تابع قابل دسترسی نیستند.
 *
 * var:
 * متغیرهایی که با var تعریف می‌شوند دارای Function Scope هستند.
 * این متغیرها در سراسر تابع، حتی داخل Blockهای تو در تو،
 * قابل دسترسی هستند.
 *
 * let و const:
 * متغیرهایی که با let و const تعریف می‌شوند دارای Block Scope هستند.
 * این متغیرها فقط در Blockای که داخل آن تعریف شده‌اند
 * و محدوده‌های داخلی آن قابل دسترسی هستند.
 *
 * نکته مهم:
 * var به Block Scope محدود نیست، اما اگر داخل یک تابع تعریف شود،
 * به Function Scope همان تابع محدود خواهد بود.
 */

function testScope() {
  if (true) {
    var first = "JavaScript";
    let second = "Vue";
    const third = "React";
  }

  console.log(first);
  // JavaScript

  console.log(second);
  // ReferenceError

  console.log(third);
  // ReferenceError
}

testScope();

