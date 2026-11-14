
/**
 * Closure and Memory Management
 *
 * مدیریت حافظه و ارتباط آن با Closure
 *
 * English:
 * This file demonstrates how closures keep variables reachable
 * and how unnecessary references can cause memory leaks.
 *
 * فارسی:
 * این فایل نشان می‌دهد که Closure چگونه متغیرها را قابل دسترسی
 * نگه می‌دارد و ارجاع‌های غیرضروری چگونه می‌توانند باعث Memory Leak شوند.
 */

// --------------------------------------------------
// 1. Closure keeps variables reachable
// 1. کلوزر متغیرها را قابل دسترسی نگه می‌دارد
// --------------------------------------------------

/**
 * English:
 * Creates a counter using a closure.
 * The inner function retains access to the count variable
 * even after createCounter() has finished executing.
 *
 * فارسی:
 * با استفاده از Closure یک شمارنده ایجاد می‌کند.
 * تابع داخلی حتی پس از پایان اجرای createCounter()
 * همچنان به متغیر count دسترسی دارد.
 */
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

let counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


// --------------------------------------------------
// 2. Removing a reference
// 2. حذف یک ارجاع
// --------------------------------------------------

/**
 * English:
 * Setting counter to null removes this variable's reference
 * to the returned closure.
 *
 * If no other references to the closure or its required
 * lexical environment exist, they become eligible
 * for garbage collection.
 *
 * فارسی:
 * با قرار دادن null در counter، ارجاع این متغیر
 * به Closure حذف می‌شود.
 *
 * اگر هیچ ارجاع دیگری به Closure یا محیط لغوی موردنیاز آن
 * وجود نداشته باشد، امکان جمع‌آوری آن توسط Garbage Collector فراهم می‌شود.
 */
counter = null;


// --------------------------------------------------
// 3. Memory leak caused by an active interval
// 3. نشت حافظه به دلیل Interval فعال
// --------------------------------------------------

/**
 * English:
 * The interval callback retains access to the data variable.
 * As long as the interval remains active, the callback
 * can continue accessing that data.
 *
 * فارسی:
 * تابع callback مربوط به Interval همچنان به متغیر data
 * دسترسی دارد.
 * تا زمانی که Interval فعال باشد، این داده قابل دسترسی است.
 */
function startProcess() {
  const data = new Array(1000000).fill("information");

  setInterval(() => {
    console.log(data.length);
  }, 1000);
}

// Do not run this function unless you intend to keep
// the interval running.
// startProcess();


// --------------------------------------------------
// 4. Cleaning up the interval
// 4. پاک‌سازی Interval
// --------------------------------------------------

/**
 * English:
 * Returns a cleanup function that stops the interval.
 * After cleanup, the timer no longer retains the callback
 * for future executions.
 *
 * فارسی:
 * یک تابع پاک‌سازی برمی‌گرداند که Interval را متوقف می‌کند.
 * پس از پاک‌سازی، تایمر دیگر callback را برای اجراهای آینده
 * نگه نمی‌دارد.
 */
function startProcessWithCleanup() {
  const data = new Array(1000000).fill("information");

  const timerId = setInterval(() => {
    console.log(data.length);
  }, 1000);

  return function stopProcess() {
    clearInterval(timerId);
    console.log("Interval stopped");
  };
}

// Start the process
const stopProcess = startProcessWithCleanup();

// Stop the process
stopProcess();


// --------------------------------------------------
// 5. Independent closures and memory
// 5. کلوزرهای مستقل و حافظه
// --------------------------------------------------

/**
 * English:
 * Each call creates a new lexical environment
 * with its own count variable.
 *
 * فارسی:
 * هر بار اجرای این تابع یک محیط لغوی جدید
 * با متغیر count مستقل ایجاد می‌کند.
 */
function createIndependentCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counterA = createIndependentCounter();
const counterB = createIndependentCounter();

console.log(counterA()); // 1
console.log(counterA()); // 2

console.log(counterB()); // 1
console.log(counterB()); // 2


// --------------------------------------------------
// 6. Vue 3 lifecycle cleanup example
// 6. نمونه پاک‌سازی در چرخه حیات Vue 3
// --------------------------------------------------

/**
 * English:
 * In Vue 3, timers created when a component is mounted
 * should be cleared when the component is unmounted.
 *
 * فارسی:
 * در Vue 3 تایمرهایی که هنگام mount شدن کامپوننت
 * ایجاد می‌شوند، باید هنگام unmount شدن کامپوننت متوقف شوند.
 *
 * Example:
 *
 * import { onMounted, onUnmounted } from "vue";
 *
 * let timerId;
 *
 * onMounted(() => {
 *   timerId = setInterval(() => {
 *     console.log("Timer is running");
 *   }, 1000);
 * });
 *
 * onUnmounted(() => {
 *   clearInterval(timerId);
 * });
 */
