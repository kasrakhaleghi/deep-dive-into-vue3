/**
 * Explicit Binding - bind()
 *
 * The bind() method creates and returns a new function
 * with a permanently bound `this` value.
 *
 * Unlike call() and apply(), bind() does not execute
 * the original function immediately.
 *
 * Syntax:
 * const newFunction = functionName.bind(thisArg, arg1, arg2);
 *
 * Parameters:
 * - thisArg: The value that will be used as `this`
 *   when the new function is invoked.
 *
 * - Additional arguments: Optional arguments that can
 *   be pre-filled and passed to the original function.
 *
 * Important:
 * - bind() returns a new function.
 * - The returned function can be executed later.
 * - The bound `this` value is preserved when the
 *   returned function is invoked.
 * - bind() can also be used for partial function application.
 */



/**
 * اتصال صریح - متد bind()
 *
 * متد bind() یک تابع جدید ایجاد و برمی‌گرداند
 * که مقدار this آن از قبل مشخص شده است.
 *
 * برخلاف متدهای call() و apply()، متد bind()
 * تابع اصلی را بلافاصله اجرا نمی‌کند.
 *
 * ساختار:
 * const newFunction = functionName.bind(thisArg, arg1, arg2);
 *
 * پارامترها:
 *
 * - thisArg:
 * مقداری که هنگام اجرای تابع جدید، به‌عنوان this استفاده می‌شود.
 *
 * - آرگومان‌های اضافی:
 * آرگومان‌های اختیاری که می‌توان آن‌ها را از قبل
 * برای تابع اصلی مشخص کرد.
 *
 * نکات مهم:
 * - متد bind() یک تابع جدید برمی‌گرداند.
 * - تابع جدید می‌تواند در زمان دیگری اجرا شود.
 * - مقدار this متصل‌شده هنگام اجرای تابع جدید حفظ می‌شود.
 * - از bind() می‌توان برای تعیین بخشی از آرگومان‌های تابع
 *   از قبل (Partial Function Application) استفاده کرد.
 */





/**
 * Explicit Binding - bind()
 *
 * The bind() method creates a new function with a
 * permanently bound `this` value.
 *
 * Unlike call() and apply(), bind() does not execute
 * the function immediately.
 *
 * It returns a new function that can be invoked later.
 *
 * -----------------------------------------------
 *
 * اتصال صریح - متد bind()
 *
 * متد bind() یک تابع جدید ایجاد می‌کند که مقدار this
 * آن از قبل مشخص شده است.
 *
 * برخلاف call() و apply()، این متد تابع را بلافاصله اجرا نمی‌کند.
 *
 * بلکه یک تابع جدید برمی‌گرداند که می‌توان آن را بعداً اجرا کرد.
 */

// Example 1: Basic bind()

const developer = {
  name: "Alex",
  role: "Frontend Developer",
};

function showProfile() {
  console.log(this.name);
  console.log(this.role);
}

const profile = showProfile.bind(developer);

profile();

// Expected Output:
// Alex
// Frontend Developer


// Example 2: Using bind() with predefined arguments

const product = {
  name: "Laptop",
  price: 2000,
};

function calculateDiscount(discount) {
  return this.price - discount;
}

const discountLaptop = calculateDiscount.bind(product, 300);

console.log(discountLaptop());

// Expected Output:
// 1700


// Example 3: Fixing this when extracting an object method

const user = {
  name: "Sarah",

  introduce() {
    console.log(this.name);
  },
};

// Extracting the method without binding
const sayHelloWithoutBind = user.introduce;

// Calling the extracted method
sayHelloWithoutBind();

// Expected Output:
// undefined (in a non-strict classic browser script)
// In strict mode, this is undefined and accessing name
// throws a TypeError.


// Extracting the method with bind()
const sayHelloWithBind = user.introduce.bind(user);

sayHelloWithBind();

// Expected Output:
// Sarah


// Example 4: Comparing call(), apply(), and bind()

const person = {
  name: "John",
};

function introduce(role, country) {
  console.log(`${this.name} - ${role} - ${country}`);
}

// call(): Executes immediately with individual arguments
introduce.call(person, "Developer", "Germany");

// Expected Output:
// John - Developer - Germany


// apply(): Executes immediately with an array of arguments
introduce.apply(person, ["Developer", "Germany"]);

// Expected Output:
// John - Developer - Germany


// bind(): Returns a new function for later execution
const boundIntroduce = introduce.bind(
  person,
  "Developer",
  "Germany"
);

boundIntroduce();

// Expected Output:
// John - Developer - Germany
