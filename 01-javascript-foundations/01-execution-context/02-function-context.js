/**
 * Function Execution Context
 *
 * A Function Execution Context is created every time a function
 * is invoked.
 *
 * It provides an environment for executing the function's code
 * and manages its local variables, function declarations,
 * arguments, outer lexical environment, and the value of `this`.
 *
 * Each function invocation creates a new Function Execution Context,
 * even when the same function is called multiple times.
 *
 * When the function finishes execution, its Execution Context
 * is removed from the Call Stack.
 */

/**
 * محیط اجرایی تابع (Function Execution Context)
 *
 * هر بار که یک تابع فراخوانی می‌شود، یک Function Execution
 * Context جدید برای اجرای آن ایجاد می‌شود.
 *
 * این محیط، اطلاعات موردنیاز برای اجرای تابع را مدیریت می‌کند؛
 * از جمله متغیرهای محلی، توابع تعریف‌شده درون آن، آرگومان‌ها،
 * محیط واژگانی بیرونی و مقدار this.
 *
 * هر بار فراخوانی یک تابع، حتی اگر همان تابع چندین بار اجرا شود،
 * یک Function Execution Context مستقل ایجاد می‌کند.
 *
 * پس از پایان اجرای تابع، Execution Context مربوط به آن
 * از Call Stack خارج می‌شود.
 */

const globalValue = "I am global";

function firstFunction() {
  const firstValue = "I am inside firstFunction";

  function secondFunction() {
    const secondValue = "I am inside secondFunction";

    console.log(globalValue);
    console.log(firstValue);
    console.log(secondValue);
  }

  secondFunction();
}

firstFunction();

// 