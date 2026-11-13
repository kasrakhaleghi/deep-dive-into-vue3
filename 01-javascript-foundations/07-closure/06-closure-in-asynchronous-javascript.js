
/**
 * Closure in Asynchronous JavaScript
 *
 * EN:
 * This file demonstrates how closures preserve access to
 * outer variables in asynchronous callbacks.
 *
 * FA:
 * این فایل نشان می‌دهد Closure چگونه دسترسی به متغیرهای
 * محیط بیرونی را در Callbackهای غیرهم‌زمان حفظ می‌کند.
 */


/**
 * Example 1: Synchronous vs Asynchronous Execution
 *
 * EN:
 * Synchronous statements execute in order.
 * setTimeout schedules its callback for later execution.
 *
 * FA:
 * دستورات Synchronous به ترتیب اجرا می‌شوند.
 * setTimeout اجرای Callback را برای زمان بعدی برنامه‌ریزی می‌کند.
 */

console.log("First");

setTimeout(() => {
  console.log("Second");
}, 1000);

console.log("Third");

// Expected output:
// First
// Third
// Second


/**
 * Example 2: Closure Inside setTimeout
 *
 * EN:
 * The callback retains access to the username variable,
 * even after fetchUser has finished executing.
 *
 * FA:
 * Callback حتی پس از پایان اجرای fetchUser،
 * دسترسی خود را به متغیر username حفظ می‌کند.
 */

function fetchUser() {
  const username = "Alex";

  setTimeout(() => {
    console.log(username);
  }, 1000);
}

fetchUser();

// Expected output after approximately 1 second:
// Alex


/**
 * Example 3: Closure and Variable Mutation
 *
 * EN:
 * The callback does not capture a snapshot of message.
 * It retains access to the same variable binding.
 *
 * The variable is updated before the callback executes.
 *
 * FA:
 * Callback یک کپی ثابت از message دریافت نمی‌کند.
 * بلکه به همان binding متغیر دسترسی دارد.
 *
 * مقدار متغیر قبل از اجرای Callback تغییر می‌کند.
 */

function createTimer() {
  let message = "Loading...";

  setTimeout(() => {
    console.log(message);
  }, 1000);

  message = "Data Loaded!";
}

createTimer();

// Expected output after approximately 1 second:
// Data Loaded!


/**
 * Example 4: Synchronous Return and Asynchronous Callback
 *
 * EN:
 * The outer function returns synchronously.
 * The result is logged before the scheduled callback executes.
 *
 * FA:
 * تابع بیرونی به‌صورت Synchronous مقدار خود را برمی‌گرداند.
 * بنابراین result قبل از اجرای Callback زمان‌بندی‌شده چاپ می‌شود.
 */

function exampleTwo() {
  let message = "Hello";

  setTimeout(() => {
    console.log(message);
  }, 1000);

  message = "Goodbye";

  return message;
}

const result = exampleTwo();

console.log(result);

// Expected output:
// Goodbye
// Goodbye (after approximately 1 second)


/**
 * Example 5: Closure with Promise
 *
 * EN:
 * A Promise callback can retain access to variables
 * from its surrounding lexical environment.
 *
 * FA:
 * Callback مربوط به Promise نیز می‌تواند دسترسی خود را
 * به متغیرهای محیط واژگانی بیرونی حفظ کند.
 */

function loadUser() {
  const user = {
    name: "Sarah",
    role: "Frontend Developer"
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(user);
    }, 1000);
  });
}

loadUser().then((user) => {
  console.log(user.name);
  console.log(user.role);
});

// Expected output after approximately 1 second:
// Sarah
// Frontend Developer


/**
 * Example 6: Independent Asynchronous Closures
 *
 * EN:
 * Each invocation creates an independent lexical environment.
 * Each callback retains access to its own count variable.
 *
 * FA:
 * هر بار اجرای تابع یک محیط واژگانی مستقل ایجاد می‌کند.
 * هر Callback به متغیر count مخصوص خودش دسترسی دارد.
 */

function createAsyncCounter(initialValue) {
  let count = initialValue;

  return function () {
    setTimeout(() => {
      count++;

      console.log(count);
    }, 1000);
  };
}

const counter1 = createAsyncCounter(0);
const counter2 = createAsyncCounter(10);

counter1();
counter2();

// Expected output after approximately 1 second:
// 1
// 11


/**
 * Key Takeaways
 *
 * EN:
 * 1. Asynchronous callbacks may execute after outer functions finish.
 * 2. Closures preserve access to outer variable bindings.
 * 3. Synchronous code runs before scheduled timer callbacks.
 * 4. Each outer function invocation can create independent state.
 *
 * FA:
 * ۱. Callbackهای غیرهم‌زمان ممکن است پس از پایان تابع بیرونی اجرا شوند.
 * ۲. Closure دسترسی به binding متغیرهای بیرونی را حفظ می‌کند.
 * ۳. کدهای Synchronous قبل از Callbackهای زمان‌بندی‌شده اجرا می‌شوند.
 * ۴. هر بار اجرای تابع بیرونی می‌تواند وضعیت مستقلی ایجاد کند.
 */
