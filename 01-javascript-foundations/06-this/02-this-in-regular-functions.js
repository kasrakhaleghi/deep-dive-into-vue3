/**
 * Default Binding
 *
 * Default Binding is one of JavaScript's this-binding rules.
 *
 * It applies when a regular function is called independently,
 * without being invoked as a method of an object.
 *
 * Non-Strict Mode:
 * When a regular function is called independently,
 * `this` refers to the Global Object.
 *
 * Strict Mode:
 * When a regular function is called independently,
 * `this` is undefined.
 *
 * Important:
 * Default Binding applies to regular function calls.
 * The value of `this` can change depending on how the function
 * is invoked.
 */


/**
 * اتصال پیش‌فرض (Default Binding)
 *
 * Default Binding یکی از قوانین تعیین مقدار this در JavaScript است.
 *
 * این قانون زمانی اعمال می‌شود که یک تابع معمولی به‌صورت مستقل
 * فراخوانی شود و متد یک آبجکت نباشد.
 *
 * حالت Non-Strict Mode:
 * وقتی یک تابع معمولی به‌صورت مستقل فراخوانی می‌شود،
 * this به Global Object اشاره می‌کند.
 *
 * حالت Strict Mode:
 * وقتی یک تابع معمولی به‌صورت مستقل فراخوانی می‌شود،
 * مقدار this برابر undefined خواهد بود.
 *
 * نکته مهم:
 * Default Binding مربوط به فراخوانی مستقل توابع معمولی است.
 * مقدار this می‌تواند بر اساس نحوه فراخوانی تابع تغییر کند.
 */



/**
 * Default Binding Experiment
 *
 * Testing `this` in regular function calls.
 */


// ==========================================
// 1. Non-Strict Mode
// ==========================================

function showGlobalThis() {
  console.log(this);
}

showGlobalThis();

// Expected Output:
// Global Object
// In browsers: Window


// ==========================================
// 2. Strict Mode
// ==========================================

function showStrictThis() {
  "use strict";

  console.log(this);
}

showStrictThis();

// Expected Output:
// undefined


// ==========================================
// 3. Object Method
// ==========================================

const user = {
  name: "Alex",

  showName() {
    console.log(this.name);
  }
};

user.showName();

// Expected Output:
// Alex


// ==========================================
// 4. Independent Function Call
// ==========================================

function showName() {
  console.log(this);
}

showName();

// Expected Output:
// Global Object
// In browsers: Window
