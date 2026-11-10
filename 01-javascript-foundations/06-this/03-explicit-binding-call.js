/**
 * Explicit Binding
 *
 * Explicit Binding is a mechanism that allows us to explicitly
 * specify the value of `this` when invoking a function.
 *
 * JavaScript provides three methods for explicit binding:
 * call(), apply(), and bind().
 *
 * call():
 * The call() method immediately invokes a function with a
 * specified `this` value.
 *
 * The first argument passed to call() determines the value
 * of `this`.
 *
 * Additional arguments are passed to the function individually,
 * in the order they are provided.
 *
 * Syntax:
 * functionName.call(thisValue, argument1, argument2);
 *
 * Important:
 * call() executes the function immediately and allows the
 * same function to be used with different objects.
 */



/**
 * اتصال صریح (Explicit Binding)
 *
 * Explicit Binding مکانیزمی است که به ما اجازه می‌دهد
 * مقدار this را هنگام فراخوانی تابع به‌صورت مستقیم مشخص کنیم.
 *
 * جاوااسکریپت سه متد برای Explicit Binding در اختیار ما قرار می‌دهد:
 * call()، apply() و bind().
 *
 * متد call():
 * متد call() تابع را بلافاصله با مقدار مشخص‌شده برای this اجرا می‌کند.
 *
 * اولین آرگومان ارسال‌شده به call() مقدار this را تعیین می‌کند.
 *
 * آرگومان‌های بعدی به‌ترتیب به پارامترهای تابع ارسال می‌شوند.
 *
 * ساختار:
 * functionName.call(thisValue, argument1, argument2);
 *
 * نکته مهم:
 * متد call() تابع را بلافاصله اجرا می‌کند و اجازه می‌دهد
 * یک تابع یکسان را با آبجکت‌های مختلف استفاده کنیم.
 */



/**
 * Explicit Binding - call()
 *
 * This example demonstrates how call() allows us to
 * explicitly set the value of `this` and pass arguments
 * to a function.
 */


// ==========================================
// 1. Basic Explicit Binding
// ==========================================

function introduce() {
  console.log(`My name is ${this.name}`);
}

const user1 = {
  name: "Alex"
};

const user2 = {
  name: "Sarah"
};

introduce.call(user1);
// Output: My name is Alex

introduce.call(user2);
// Output: My name is Sarah


// ==========================================
// 2. Explicit Binding with Arguments
// ==========================================

function introduceUser(role, country) {
  console.log(`Name: ${this.name}`);
  console.log(`Role: ${role}`);
  console.log(`Country: ${country}`);
}

const developer = {
  name: "John"
};

introduceUser.call(
  developer,
  "Frontend Developer",
  "Germany"
);

// Output:
// Name: John
// Role: Frontend Developer
// Country: Germany


// ==========================================
// 3. Reusing a Function with Different Objects
// ==========================================

function calculateDiscount(discount) {
  const finalPrice = this.price - discount;

  console.log(`Product: ${this.name}`);
  console.log(`Final Price: ${finalPrice}`);
}

const laptop = {
  name: "Laptop",
  price: 1000
};

const monitor = {
  name: "Monitor",
  price: 500
};

calculateDiscount.call(laptop, 100);

// Output:
// Product: Laptop
// Final Price: 900

calculateDiscount.call(monitor, 50);

// Output:
// Product: Monitor
// Final Price: 450


