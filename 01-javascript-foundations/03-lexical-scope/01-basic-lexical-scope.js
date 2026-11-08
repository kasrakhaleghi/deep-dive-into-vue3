/**
 * Lexical Scope
 *
 * Lexical Scope determines the accessibility of variables and
 * functions based on where they are declared in the source code.
 *
 * An inner scope can access variables declared in its own scope
 * and in its outer scopes.
 *
 * However, an outer scope cannot directly access variables
 * declared inside its inner scopes.
 *
 * The scope of a variable is determined by its location in the
 * source code, not by where a function is called.
 */


/**
 * محدوده واژگانی (Lexical Scope)
 *
 * Lexical Scope محدوده دسترسی به متغیرها و توابع را بر اساس
 * محل تعریف آن‌ها در کد منبع مشخص می‌کند.
 *
 * یک محدوده داخلی می‌تواند به متغیرهای تعریف‌شده در محدوده خود
 * و همچنین محدوده‌های بیرونی دسترسی داشته باشد.
 *
 * اما یک محدوده بیرونی نمی‌تواند مستقیماً به متغیرهای تعریف‌شده
 * در محدوده‌های داخلی خود دسترسی پیدا کند.
 *
 * محدوده دسترسی یک متغیر بر اساس محل تعریف آن در کد مشخص می‌شود،
 * نه محلی که تابع در آن فراخوانی شده است.
 */

const globalValue = "Global";

function first() {
  const firstValue = "First";

  function second() {
    const secondValue = "Second";

    console.log(globalValue);
    console.log(firstValue);
    console.log(secondValue);
  }

  second();
}

first();