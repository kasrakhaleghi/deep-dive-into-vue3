/**
 * Closures - Shared Lexical Environment
 *
 * Multiple inner functions can share access to the same
 * lexical environment created by their outer function.
 *
 * When these functions access the same variable, they
 * operate on the same variable binding.
 *
 * Important:
 *
 * 1. Multiple closures can reference the same variable binding.
 *
 * 2. If one closure modifies a shared variable,
 *    other closures can access its updated value.
 *
 * 3. A closure does not simply store a copy of the
 *    variable's initial value.
 *
 * 4. Shared lexical environments are useful for creating
 *    private state and controlled access to data.
 *
 * Example:
 * - deposit() modifies the balance.
 * - withdraw() modifies the balance.
 * - showBalance() reads the current balance.
 *
 * All three functions access the same balance binding.
 */


/**
 * Closures - محیط لغوی مشترک
 *
 * چند تابع داخلی می‌توانند به یک محیط لغوی مشترک
 * که توسط تابع بیرونی ایجاد شده است، دسترسی داشته باشند.
 *
 * زمانی که این توابع به یک متغیر مشترک دسترسی پیدا می‌کنند،
 * همگی با یک Binding یکسان از آن متغیر کار می‌کنند.
 *
 * نکات مهم:
 *
 * ۱. چند Closure می‌توانند به یک Binding مشترک اشاره کنند.
 *
 * ۲. اگر یکی از Closureها مقدار متغیر مشترک را تغییر دهد،
 *    سایر Closureها نیز به مقدار به‌روزشده دسترسی خواهند داشت.
 *
 * ۳. Closure صرفاً یک کپی از مقدار اولیه متغیر ذخیره نمی‌کند.
 *
 * ۴. محیط‌های لغوی مشترک برای ایجاد وضعیت خصوصی
 *    و کنترل دسترسی به داده‌ها کاربرد دارند.
 *
 * مثال:
 * - متد deposit() موجودی را افزایش می‌دهد.
 * - متد withdraw() موجودی را کاهش می‌دهد.
 * - متد showBalance() موجودی فعلی را نمایش می‌دهد.
 *
 * هر سه تابع به یک Binding مشترک از balance دسترسی دارند.
 */




/**
 * Closures - Shared Lexical Environment
 *
 * Multiple inner functions can access and modify
 * the same variable binding from their outer function.
 *
 * ------------------------------------------------
 *
 * چند تابع داخلی می‌توانند به یک Binding مشترک
 * از متغیرهای تابع بیرونی دسترسی داشته باشند
 * و مقدار آن‌ها را تغییر دهند.
 */


// Example 1: Multiple closures sharing one variable

function createAccount() {
  let balance = 100;

  return {
    deposit(amount) {
      balance += amount;
    },

    withdraw(amount) {
      balance -= amount;
    },

    showBalance() {
      console.log(balance);
    }
  };
}

const account = createAccount();

account.showBalance(); // 100

account.deposit(50);
account.showBalance(); // 150

account.withdraw(30);
account.showBalance(); // 120

// Expected Output:
// 100
// 150
// 120


// Example 2: Shared variable between two closures

function createCounter() {
  let count = 0;

  function increment() {
    count++;
  }

  function showCount() {
    console.log(count);
  }

  return {
    increment,
    showCount
  };
}

const counter = createCounter();

counter.showCount(); // 0

counter.increment();
counter.showCount(); // 1

counter.increment();
counter.showCount(); // 2

// Expected Output:
// 0
// 1
// 2


// Example 3: Multiple closures modifying shared state

function createUserProfile() {
  let username = "Alex";
  let age = 25;

  return {
    updateName(newName) {
      username = newName;
    },

    updateAge(newAge) {
      age = newAge;
    },

    showProfile() {
      console.log(`Name: ${username}`);
      console.log(`Age: ${age}`);
    }
  };
}

const profile = createUserProfile();

profile.showProfile();

// Expected Output:
// Name: Alex
// Age: 25

profile.updateName("Sarah");
profile.updateAge(30);

profile.showProfile();

// Expected Output:
// Name: Sarah
// Age: 30


// Example 4: Independent lexical environments

function createCounterWithInitialValue(initialValue) {
  let count = initialValue;

  return {
    increment() {
      count++;
    },

    showCount() {
      console.log(count);
    }
  };
}

const firstCounter = createCounterWithInitialValue(0);
const secondCounter = createCounterWithInitialValue(10);

firstCounter.increment();
firstCounter.increment();

secondCounter.increment();

firstCounter.showCount();  // 2
secondCounter.showCount(); // 11

// Expected Output:
// 2
// 11
//
// Each invocation of createCounterWithInitialValue()
// creates a separate lexical environment.
// Therefore, each counter maintains independent state.
