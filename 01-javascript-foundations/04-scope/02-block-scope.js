/**
 * Block Scope
 *
 * A Block Scope is a scope created by a pair of curly braces {}.
 *
 * Variables declared with let and const inside a block are
 * accessible only within that block and its nested scopes.
 *
 * They cannot be accessed from outside the block in which
 * they were declared.
 *
 * However, variables declared with var are not restricted
 * to block scope.
 *
 * The var declaration is scoped to its nearest function
 * or the global scope.
 *
 * Block Scope helps prevent variables from being accessed
 * outside their intended boundaries.
 */


/**
 * محدوده بلوکی (Block Scope)
 *
 * Block Scope محدوده‌ای است که با استفاده از یک جفت آکولاد {}
 * ایجاد می‌شود.
 *
 * متغیرهایی که با let و const درون یک Block تعریف می‌شوند،
 * فقط در همان Block و محدوده‌های داخلی آن قابل دسترسی هستند.
 *
 * این متغیرها از خارج Blockای که در آن تعریف شده‌اند
 * قابل دسترسی نیستند.
 *
 * اما متغیرهایی که با var تعریف می‌شوند، به Block Scope
 * محدود نیستند.
 *
 * محدوده var نزدیک‌ترین تابع یا در صورت نبود تابع،
 * محدوده Global است.
 *
 * Block Scope کمک می‌کند دسترسی به متغیرها به محدوده
 * موردنظر آن‌ها محدود بماند.
 */

{ 
  var firstName = "John";
  let lastName = "black";
  const age = 25;
}

console.log(firstName);
// John

console.log(lastName);
// ReferenceError

console.log(age);
// ReferenceError


