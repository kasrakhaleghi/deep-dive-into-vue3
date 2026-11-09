/**
 * Variable Shadowing
 *
 * Variable Shadowing occurs when a variable declared in an inner
 * scope has the same name as a variable declared in an outer scope.
 *
 * In this situation, the inner variable shadows the outer variable
 * within its own scope.
 *
 * When JavaScript tries to access the variable, it first looks
 * in the current scope.
 *
 * If a matching variable is found, JavaScript uses that variable
 * instead of searching the outer scopes.
 *
 * Shadowing does not modify or delete the outer variable.
 * The outer variable remains accessible from its own scope.
 *
 * Variable Shadowing can occur with variables declared using
 * let and const.
 */

/**
 * سایه‌اندازی متغیرها (Variable Shadowing)
 *
 * سایه‌اندازی زمانی اتفاق می‌افتد که متغیری در یک Scope داخلی
 * با همان نام متغیری در یک Scope بیرونی تعریف شود.
 *
 * در این شرایط، متغیر داخلی در محدوده خودش دسترسی به متغیر
 * بیرونی هم‌نام را پنهان می‌کند.
 *
 * زمانی که جاوااسکریپت قصد دسترسی به یک متغیر را دارد،
 * ابتدا Scope فعلی را بررسی می‌کند.
 *
 * اگر متغیری با نام موردنظر پیدا شود، همان متغیر استفاده می‌شود
 * و جستجو در Scopeهای بیرونی ادامه پیدا نمی‌کند.
 *
 * سایه‌اندازی باعث تغییر یا حذف متغیر بیرونی نمی‌شود.
 * متغیر بیرونی همچنان در محدوده خودش قابل دسترسی است.
 *
 * Variable Shadowing می‌تواند با متغیرهای تعریف‌شده با
 * let و const اتفاق بیفتد.
 */

const language = "JavaScript";

function first() {
  const language = "TypeScript";

  function second() {
    const language = "Python";

    console.log(language);
  }

  second();

  console.log(language);
}

first();

console.log(language);

