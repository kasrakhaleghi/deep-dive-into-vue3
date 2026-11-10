/**
 * Explicit Binding - apply()
 *
 * The apply() method allows us to explicitly define
 * the value of `this` when invoking a function.
 *
 * The apply() method immediately executes the function.
 *
 * Syntax:
 * functionName.apply(thisArg, [argument1, argument2]);
 *
 * Parameters:
 * - thisArg: The value that will be used as `this`
 *   inside the function.
 *
 * - argsArray: An array containing the arguments
 *   that will be passed to the function.
 *
 * Important:
 * Unlike call(), apply() receives function arguments
 * as an array instead of individual arguments.
 *
 * Both call() and apply() execute the function immediately.
 */


/**
 * اتصال صریح - متد apply()
 *
 * متد apply() به ما اجازه می‌دهد مقدار this را
 * هنگام اجرای تابع به‌صورت صریح مشخص کنیم.
 *
 * متد apply() تابع را بلافاصله اجرا می‌کند.
 *
 * ساختار:
 * functionName.apply(thisArg, [argument1, argument2]);
 *
 * پارامترها:
 *
 * - thisArg:
 * مقداری که قرار است در داخل تابع به‌عنوان this استفاده شود.
 *
 * - argsArray:
 * آرایه‌ای شامل آرگومان‌هایی که به تابع ارسال می‌شوند.
 *
 * نکته مهم:
 * برخلاف call()، در apply() آرگومان‌های تابع
 * به‌جای ارسال جداگانه، داخل یک آرایه قرار می‌گیرند.
 *
 * هر دو متد call() و apply() تابع را بلافاصله اجرا می‌کنند.
 */



/**
 * Explicit Binding - apply()
 *
 * The apply() method allows us to explicitly define
 * the value of `this` when invoking a function.
 *
 * The first argument specifies the value of `this`.
 * The second argument is an array of function arguments.
 *
 * Unlike call(), apply() receives arguments as an array.
 *
 * -----------------------------------------------
 *
 * اتصال صریح - متد apply()
 *
 * متد apply() به ما اجازه می‌دهد مقدار this را
 * هنگام اجرای تابع به‌صورت صریح مشخص کنیم.
 *
 * آرگومان اول مقدار this را مشخص می‌کند.
 * آرگومان دوم آرایه‌ای از آرگومان‌های تابع است.
 *
 * برخلاف call()، آرگومان‌ها در apply() به‌صورت آرایه ارسال می‌شوند.
 */

// Example 1: Basic apply()
const developer = {
  name: "Sarah",
  experience: 4,
};

function showInfo(technology, level) {
  console.log(this.name);
  console.log(technology);
  console.log(level);
}

showInfo.apply(developer, ["Vue", "Advanced"]);

// Expected Output:
// Sarah
// Vue
// Advanced


// Example 2: Using apply() for calculations
const product = {
  name: "Laptop",
  price: 1000,
};

function calculateTotal(tax, shipping) {
  return this.price + tax + shipping;
}

const result = calculateTotal.apply(product, [100, 50]);

console.log(result);

// Expected Output:
// 1150


// Example 3: Comparing call() and apply()
const user = {
  name: "Alex",
};

function introduce(role, country) {
  console.log(`My name is ${this.name}`);
  console.log(`Role: ${role}`);
  console.log(`Country: ${country}`);
}

// Using call()
introduce.call(user, "Frontend Developer", "Germany");

// Expected Output:
// My name is Alex
// Role: Frontend Developer
// Country: Germany


// Using apply()
introduce.apply(user, ["Frontend Developer", "Germany"]);

// Expected Output:
// My name is Alex
// Role: Frontend Developer
// Country: Germany


