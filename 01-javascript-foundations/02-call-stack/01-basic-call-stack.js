/**
 * Stack Frame
 *
 * A Stack Frame represents an individual function invocation
 * within the Call Stack.
 *
 * It contains the information required to manage that function
 * invocation, such as its arguments, local variables, and
 * execution state.
 *
 * When a function is invoked, a corresponding Stack Frame is
 * added to the Call Stack.
 *
 * When the function finishes execution, its Stack Frame is
 * removed from the Call Stack, allowing the previous function
 * invocation to resume execution.
 *
 * A function does not need an explicit return statement to finish.
 * Reaching the end of its function body also completes its execution.
 */

/**
 * قاب پشته (Stack Frame)
 *
 * Stack Frame نمایش‌دهنده یک فراخوانی تابع در Call Stack است.
 *
 * این قاب شامل اطلاعات موردنیاز برای مدیریت فراخوانی تابع است؛
 * مانند آرگومان‌ها، متغیرهای محلی و وضعیت اجرای تابع.
 *
 * هر بار که یک تابع فراخوانی می‌شود، Stack Frame مربوط به آن
 * به Call Stack اضافه می‌شود.
 *
 * پس از پایان اجرای تابع، Stack Frame مربوط به آن از Call Stack
 * خارج می‌شود و امکان ادامه اجرای تابع قبلی فراهم می‌شود.
 *
 * برای پایان اجرای یک تابع، وجود دستور return الزامی نیست.
 * رسیدن به انتهای بدنه تابع نیز باعث پایان اجرای آن می‌شود.
 */


function first() {
  console.log("1 - First started");

  second();

  console.log("4 - First finished");
}

function second() {
  console.log("2 - Second started");

  third();

  console.log("5 - Second finished");
}

function third() {
  console.log("3 - Third started");
}

first();