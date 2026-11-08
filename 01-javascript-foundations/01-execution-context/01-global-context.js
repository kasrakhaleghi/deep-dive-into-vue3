/**
 * Execution Context
 *
 * An Execution Context is the environment in which JavaScript code
 * is evaluated and executed.
 *
 * It manages the information required during code execution,
 * including variable bindings, function declarations, the outer
 * lexical environment, and the value of `this`.
 *
 * JavaScript creates a Global Execution Context when the program
 * starts and creates a new Function Execution Context whenever
 * a function is invoked.
 */

/**
 * محیط اجرایی (Execution Context)
 *
 * Execution Context محیطی است که کد JavaScript در آن ارزیابی
 * و اجرا می‌شود.
 *
 * این محیط اطلاعات موردنیاز هنگام اجرای کد را مدیریت می‌کند؛
 * از جمله متغیرها، تعریف توابع، محیط واژگانی بیرونی و مقدار this.
 *
 * با شروع اجرای برنامه، یک Global Execution Context ایجاد می‌شود
 * و هر بار که یک تابع فراخوانی می‌شود، یک Function Execution
 * Context جدید برای آن فراخوانی ایجاد خواهد شد.
 */

const username = "Kasra";
const role = "Frontend Developer";

function showProfile() {
  console.log(username);
  console.log(role);
}

showProfile();