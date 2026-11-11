
/**
 * Closure and Private Variables
 *

 * Closures allow functions to access variables from their outer
 * lexical environment, even after the outer function has finished.
 * This behavior can be used to create private variables and
 * encapsulate internal state.
 *
 * Closure به توابع اجازه می‌دهد به متغیرهای محیط واژگانی بیرونی
 * دسترسی داشته باشند؛ حتی بعد از اینکه تابع بیرونی اجرا شده است.
 * از این ویژگی می‌توان برای ایجاد متغیرهای خصوصی و مخفی کردن
 * وضعیت داخلی یک ساختار استفاده کرد.
 */


/**
 * Example 1: Public Object Property
 *
 * EN:
 * Object properties are publicly accessible and can be modified
 * directly from outside the object.
 *
 * FA:
 * پراپرتی‌های آبجکت به صورت عمومی در دسترس هستند و می‌توان
 * مستقیماً از خارج آبجکت آن‌ها را خواند یا تغییر داد.
 */

const publicAccount = {
  balance: 1000
};

publicAccount.balance = 5000;

console.log(publicAccount.balance); // 5000


/**
 * Example 2: Creating Private Variables with Closure
 *
 * EN:
 * The balance variable is declared inside createAccount.
 * It is not a property of the returned object.
 *
 * The returned methods form closures and retain access to balance.
 * External code can interact with balance only through these methods.
 *
 * FA:
 * متغیر balance داخل تابع createAccount تعریف شده است.
 * این متغیر یکی از پراپرتی‌های آبجکت خروجی نیست.
 *
 * متدهای برگشتی Closure هستند و دسترسی خود را به balance حفظ می‌کنند.
 * کد بیرونی فقط از طریق این متدها می‌تواند با موجودی تعامل داشته باشد.
 */

function createAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
    },

    withdraw(amount) {
      balance -= amount;
    },

    getBalance() {
      return balance;
    }
  };
}

const account = createAccount(1000);

account.deposit(500);
console.log(account.getBalance()); // 1500

account.withdraw(200);
console.log(account.getBalance()); // 1300

console.log(account.balance); // undefined


/**
 * Example 3: Independent Private Variables
 *
 * EN:
 * Every invocation of createAccount creates a new lexical environment.
 * Therefore, each account has its own independent balance variable.
 *
 * FA:
 * هر بار اجرای createAccount یک محیط واژگانی جدید ایجاد می‌کند.
 * بنابراین هر حساب بانکی متغیر balance مستقل خودش را دارد.
 */

const account1 = createAccount(500);
const account2 = createAccount(1000);

account1.withdraw(100);
account2.deposit(200);

console.log(account1.getBalance()); // 400
console.log(account2.getBalance()); // 1200


/**
 * Example 4: Private Variables in a Wallet
 *
 * EN:
 * This example demonstrates encapsulation using closures.
 * The balance cannot be accessed directly from outside,
 * but public methods can read and update it.
 *
 * FA:
 * این مثال مفهوم کپسوله‌سازی را با استفاده از Closure نشان می‌دهد.
 * موجودی از بیرون به صورت مستقیم قابل دسترسی نیست،
 * اما متدهای عمومی می‌توانند آن را بخوانند و تغییر دهند.
 */

function createWallet(initialBalance) {
  let balance = initialBalance;

  return {
    addMoney(amount) {
      balance += amount;
    },

    spendMoney(amount) {
      balance -= amount;
    },

    getBalance() {
      return balance;
    }
  };
}

const wallet = createWallet(200);

wallet.addMoney(100);
wallet.spendMoney(50);

console.log(wallet.getBalance()); // 250
console.log(wallet.balance); // undefined


/**
 * Example 5: Each Wallet Has Its Own Private State
 *
 * EN:
 * Each wallet maintains its own private balance.
 * Updating one wallet does not affect the other wallet.
 *
 * FA:
 * هر کیف پول موجودی خصوصی و مستقل خودش را نگهداری می‌کند.
 * تغییر موجودی یک کیف پول، تأثیری روی کیف پول دیگر ندارد.
 */

const wallet1 = createWallet(500);
const wallet2 = createWallet(1000);

wallet1.spendMoney(100);
wallet2.addMoney(200);

console.log(wallet1.getBalance()); // 400
console.log(wallet2.getBalance()); // 1200


/**
 * Key Takeaways
 *
 * EN:
 * 1. Closures can be used to create private variables.
 * 2. Private variables are not directly accessible as object properties.
 * 3. Closure methods retain access to their outer lexical environment.
 * 4. Each function invocation can create an independent private state.
 *
 * FA:
 * ۱. از Closure می‌توان برای ایجاد متغیرهای خصوصی استفاده کرد.
 * ۲. متغیرهای خصوصی مستقیماً به عنوان پراپرتی آبجکت در دسترس نیستند.
 * ۳. متدهای Closure دسترسی خود را به محیط واژگانی بیرونی حفظ می‌کنند.
 * ۴. هر بار اجرای تابع می‌تواند یک وضعیت خصوصی مستقل ایجاد کند.
 */



