
/**
 * Closure in Loops: var vs let
 *
 * EN:
 * This file demonstrates how closures behave differently
 * when functions are created inside loops using var and let.
 *
 * FA:
 * این فایل نشان می‌دهد Closure هنگام ساخت توابع درون حلقه،
 * با استفاده از var و let چه رفتار متفاوتی دارد.
 */


/**
 * Example 1: Closure with var
 *
 * EN:
 * var is function-scoped.
 * All functions created inside this loop share the same
 * variable binding named i.
 *
 * When the functions execute, the loop has already finished
 * and the shared variable i has the value 3.
 *
 * FA:
 * var دارای Function Scope است.
 * تمام توابع ساخته‌شده در این حلقه به یک binding مشترک
 * با نام i دسترسی دارند.
 *
 * هنگام اجرای توابع، حلقه تمام شده و مقدار متغیر مشترک
 * i برابر 3 است.
 */

function createFunctionsWithVar() {
  const functions = [];

  for (var i = 0; i < 3; i++) {
    functions.push(function () {
      return i;
    });
  }

  return functions;
}

const varFunctions = createFunctionsWithVar();

console.log("Example 1: var");

console.log(varFunctions[0]()); // 3
console.log(varFunctions[1]()); // 3
console.log(varFunctions[2]()); // 3


/**
 * Example 2: Closure with let
 *
 * EN:
 * let creates a separate variable binding for each iteration
 * of this for loop.
 *
 * Each function retains access to the binding created
 * for its own iteration.
 *
 * FA:
 * let در این حلقه for برای هر تکرار یک binding مستقل
 * برای متغیر حلقه ایجاد می‌کند.
 *
 * هر تابع به binding مربوط به تکرار خودش دسترسی دارد.
 */

function createFunctionsWithLet() {
  const functions = [];

  for (let i = 0; i < 3; i++) {
    functions.push(function () {
      return i;
    });
  }

  return functions;
}

const letFunctions = createFunctionsWithLet();

console.log("Example 2: let");

console.log(letFunctions[0]()); // 0
console.log(letFunctions[1]()); // 1
console.log(letFunctions[2]()); // 2


/**
 * Example 3: Closure with var and setTimeout
 *
 * EN:
 * setTimeout schedules callback functions to execute later.
 * The loop finishes before these callbacks execute.
 *
 * All callbacks access the same var binding.
 *
 * FA:
 * setTimeout اجرای تابع‌های callback را برای زمان بعد
 * برنامه‌ریزی می‌کند.
 * حلقه قبل از اجرای این callbackها تمام می‌شود.
 *
 * تمام callbackها به یک binding مشترک از متغیر var دسترسی دارند.
 */

console.log("Example 3: var with setTimeout");

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // 3, 3, 3
  }, 1000);
}


/**
 * Example 4: Closure with let and setTimeout
 *
 * EN:
 * Each iteration has its own let binding.
 * Therefore, each callback reads the value associated
 * with its own iteration.
 *
 * FA:
 * هر تکرار دارای binding مستقل let است.
 * بنابراین هر callback مقدار مربوط به تکرار خودش را می‌خواند.
 */

console.log("Example 4: let with setTimeout");

for (let j = 0; j < 3; j++) {
  setTimeout(function () {
    console.log(j); // 0, 1, 2
  }, 1000);
}


/**
 * Example 5: Closure Does Not Capture a Value Snapshot
 *
 * EN:
 * A closure retains access to a variable binding,
 * not just a copy of its value at function creation time.
 *
 * FA:
 * Closure دسترسی خود را به binding متغیر حفظ می‌کند،
 * نه اینکه صرفاً یک کپی از مقدار آن در زمان ساخت تابع بگیرد.
 */

function createSharedClosure() {
  let count = 0;

  const showCount = function () {
    return count;
  };

  count = 10;

  return showCount;
}

const showCount = createSharedClosure();

console.log("Example 5: Shared binding");

console.log(showCount()); // 10


/**
 * Key Takeaways
 *
 * EN:
 * 1. var is function-scoped.
 * 2. Functions created inside a var loop share one binding.
 * 3. let creates a separate binding for each for-loop iteration.
 * 4. Closures retain access to variable bindings, not value snapshots.
 *
 * FA:
 * ۱. var دارای Function Scope است.
 * ۲. توابع ساخته‌شده در حلقه var یک binding مشترک دارند.
 * ۳. let در حلقه for برای هر تکرار binding مستقلی ایجاد می‌کند.
 * ۴. Closure به binding متغیر دسترسی دارد، نه یک کپی ثابت از مقدار آن.
 */
