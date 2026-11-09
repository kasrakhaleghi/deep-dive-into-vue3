/**
 * Scope Chain
 *
 * The Scope Chain is the mechanism JavaScript uses to resolve
 * variable and identifier references across nested scopes.
 *
 * When JavaScript cannot find a variable in the current scope,
 * it searches the outer lexical scope.
 *
 * This process continues through the outer scopes until the
 * variable is found or the Global Scope is reached.
 *
 * Once a matching variable is found, the search stops.
 *
 * If the variable cannot be found in any accessible scope,
 * JavaScript throws a ReferenceError.
 *
 * JavaScript follows the lexical structure of the source code
 * when resolving variables, not the function call location.
 */

/**
 * زنجیره محدوده‌ها (Scope Chain)
 *
 * Scope Chain سازوکاری است که JavaScript برای پیدا کردن
 * متغیرها و شناسه‌ها در محدوده‌های تو در تو استفاده می‌کند.
 *
 * اگر JavaScript متغیری را در محدوده فعلی پیدا نکند،
 * محدوده واژگانی بیرونی را بررسی می‌کند.
 *
 * این جست‌وجو در محدوده‌های بیرونی ادامه پیدا می‌کند تا
 * متغیر موردنظر پیدا شود یا به Global Scope برسد.
 *
 * به محض پیدا شدن متغیر، جست‌وجو متوقف می‌شود.
 *
 * اگر متغیر در هیچ‌کدام از محدوده‌های قابل دسترسی پیدا نشود،
 * JavaScript خطای ReferenceError ایجاد می‌کند.
 *
 * JavaScript برای پیدا کردن متغیرها از ساختار واژگانی کد
 * استفاده می‌کند، نه محل فراخوانی تابع.
 */

const country = "Iran";

function first() {
  function second() {
    function third() {
      console.log(country);
    }

    third();
  }

  second();
}

first();
