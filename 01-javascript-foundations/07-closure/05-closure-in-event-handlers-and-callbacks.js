
/**
 * Closure in Event Handlers and Callback Functions
 *
 * EN:
 * This file demonstrates how closures are used in callbacks
 * and event handlers to preserve access to outer variables.
 *
 * FA:
 * این فایل نشان می‌دهد چگونه از Closure در Callbackها و
 * Event Handlerها برای حفظ دسترسی به متغیرهای بیرونی استفاده می‌شود.
 */


/**
 * Example 1: Basic Callback Function
 *
 * EN:
 * A callback is a function passed as an argument to another function.
 * The receiving function invokes the callback when needed.
 *
 * FA:
 * Callback تابعی است که به‌عنوان آرگومان به تابع دیگری ارسال می‌شود.
 * تابع دریافت‌کننده در زمان مناسب آن را اجرا می‌کند.
 */

function processUser(callback) {
  const user = "Alex";

  callback(user);
}

function showUser(name) {
  console.log(name);
}

processUser(showUser);

// Output:
// Alex


/**
 * Example 2: Closure Inside a Callback
 *
 * EN:
 * The returned function retains access to the clickCount variable.
 * Each invocation updates the same variable binding.
 *
 * FA:
 * تابع برگشتی دسترسی خود را به متغیر clickCount حفظ می‌کند.
 * هر بار اجرای تابع، همان binding مشترک را تغییر می‌دهد.
 */

function createClickHandler() {
  let clickCount = 0;

  return function () {
    clickCount++;

    console.log(`Button clicked ${clickCount} times`);
  };
}

const handleClick = createClickHandler();

handleClick(); // Button clicked 1 times
handleClick(); // Button clicked 2 times
handleClick(); // Button clicked 3 times


/**
 * Example 3: Closure in Event Handlers
 *
 * EN:
 * addEventListener registers a callback for a specific event.
 *
 * The callback retains access to the count variable,
 * even after setupCounter has finished executing.
 *
 * FA:
 * متد addEventListener یک Callback را برای یک رویداد مشخص ثبت می‌کند.
 *
 * این Callback حتی پس از پایان اجرای setupCounter،
 * دسترسی خود را به متغیر count حفظ می‌کند.
 *
 * Note:
 * This example requires a browser environment and an HTML
 * element with the ID "counterButton".
 *
 * نکته:
 * این مثال به محیط مرورگر و یک عنصر HTML با شناسه
 * counterButton نیاز دارد.
 */

function setupCounter() {
  let count = 0;

  const button = document.getElementById("counterButton");

  button.addEventListener("click", function () {
    count++;

    console.log(`Total clicks: ${count}`);
  });
}

// Uncomment in a browser environment:
// setupCounter();


/**
 * Example 4: Independent Closures
 *
 * EN:
 * Every invocation of createHandler creates a new lexical environment.
 * Each returned function maintains its own independent score variable.
 *
 * FA:
 * هر بار اجرای createHandler یک محیط واژگانی جدید ایجاد می‌کند.
 * هر تابع برگشتی متغیر score مستقل خودش را نگهداری می‌کند.
 */

function createHandler() {
  let score = 10;

  return function () {
    score += 5;

    console.log(score);
  };
}

const handler1 = createHandler();
const handler2 = createHandler();

console.log("Handler 1:");

handler1(); // 15
handler1(); // 20

console.log("Handler 2:");

handler2(); // 15


/**
 * Example 5: Closure with Multiple Variables
 *
 * EN:
 * A callback can retain access to multiple variables
 * from its outer lexical environment.
 *
 * FA:
 * یک Callback می‌تواند دسترسی خود را به چندین متغیر
 * از محیط واژگانی بیرونی حفظ کند.
 */

function createUserHandler() {
  const username = "Sarah";
  let actionCount = 0;

  return function (action) {
    actionCount++;

    console.log(
      `${username} performed ${action}. Total actions: ${actionCount}`
    );
  };
}

const userHandler = createUserHandler();

userHandler("Login");
// Sarah performed Login. Total actions: 1

userHandler("Update Profile");
// Sarah performed Update Profile. Total actions: 2

userHandler("Logout");
// Sarah performed Logout. Total actions: 3


/**
 * Key Takeaways
 *
 * EN:
 * 1. A callback is a function passed to another function.
 * 2. An event handler responds to a specific event.
 * 3. Closures allow callbacks to access outer variables.
 * 4. Each outer function invocation can create independent state.
 *
 * FA:
 * ۱. Callback تابعی است که به تابع دیگری ارسال می‌شود.
 * ۲. Event Handler به یک رویداد مشخص پاسخ می‌دهد.
 * ۳. Closure به Callback اجازه می‌دهد به متغیرهای بیرونی دسترسی داشته باشد.
 * ۴. هر بار اجرای تابع بیرونی می‌تواند وضعیت مستقلی ایجاد کند.
 */
