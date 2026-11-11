/**
 * Closures - Basic Concept
 *
 * A closure is created when a function retains access
 * to variables from its surrounding lexical environment,
 * even after the outer function has finished executing.
 *
 * A closure allows an inner function to access variables
 * declared in its outer function.
 *
 * Important:
 *
 * 1. Inner functions can access variables from their
 *    outer lexical scopes.
 *
 * 2. The outer function does not need to remain active
 *    for the inner function to access those variables.
 *
 * 3. Variables captured by a closure remain available
 *    as long as they are reachable.
 *
 * 4. Closures are useful for maintaining private state
 *    and creating functions with persistent data.
 */


/**
 * Closure - مفهوم پایه
 *
 * Closure زمانی شکل می‌گیرد که یک تابع بتواند به متغیرهای
 * محیط لغوی اطراف خود دسترسی داشته باشد؛ حتی پس از اینکه
 * تابع بیرونی اجرای خودش را به پایان رسانده باشد.
 *
 * Closure به تابع داخلی اجازه می‌دهد به متغیرهای تعریف‌شده
 * در توابع بیرونی دسترسی داشته باشد.
 *
 * نکات مهم:
 *
 * ۱. توابع داخلی می‌توانند به متغیرهای محیط‌های لغوی بیرونی
 *    خود دسترسی داشته باشند.
 *
 * ۲. برای دسترسی تابع داخلی به این متغیرها، لازم نیست
 *    تابع بیرونی همچنان در حال اجرا باشد.
 *
 * ۳. متغیرهای مورد استفاده Closure تا زمانی که قابل دسترسی
 *    باشند، در دسترس باقی می‌مانند.
 *
 * ۴. Closure برای نگهداری وضعیت خصوصی و ساخت توابعی
 *    با داده‌های ماندگار کاربرد دارد.
 */




/**
 * Closures - Basic Concept
 *
 * A closure allows an inner function to access variables
 * from its outer lexical environment, even after the
 * outer function has finished executing.
 *
 * ------------------------------------------------
 *
 * Closure به تابع داخلی اجازه می‌دهد حتی پس از پایان
 * اجرای تابع بیرونی، به متغیرهای محیط لغوی آن دسترسی داشته باشد.
 */


// Example 1: Basic Closure

function outerFunction() {
  const message = "Hello JavaScript";

  function innerFunction() {
    console.log(message);
  }

  return innerFunction;
}

const myFunction = outerFunction();

myFunction();

// Expected Output:
// Hello JavaScript


// Example 2: Closure with a Counter

function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3

// Expected Output:
// 1
// 2
// 3


// Example 3: Closure with a Different Initial Value

function createCustomCounter() {
  let count = 5;

  return function () {
    count += 2;
    console.log(count);
  };
}

const customCounter = createCustomCounter();

customCounter(); // 7
customCounter(); // 9
customCounter(); // 11

// Expected Output:
// 7
// 9
// 11


// Example 4: Accessing Variables After Outer Function Execution

function createUser() {
  const name = "Sarah";

  return function showName() {
    console.log(name);
  };
}

const user = createUser();

user();

// Expected Output:
// Sarah


// Example 5: Each Closure Maintains Its Own State

function createCounterWithInitialValue(initialValue) {
  let count = initialValue;

  return function () {
    count++;
    console.log(count);
  };
}

const firstCounter = createCounterWithInitialValue(0);
const secondCounter = createCounterWithInitialValue(10);

firstCounter(); // 1
firstCounter(); // 2

secondCounter(); // 11
secondCounter(); // 12

// Expected Output:
// 1
// 2
// 11
// 12
