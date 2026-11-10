/**
 * Arrow Functions and Lexical this
 *
 * Arrow functions do not have their own `this` binding.
 *
 * Instead, they inherit `this` from their surrounding
 * lexical environment.
 *
 * This behavior is known as Lexical this.
 *
 * Important:
 *
 * 1. The value of `this` inside an arrow function
 *    is determined by its surrounding scope.
 *
 * 2. Calling an arrow function as an object method
 *    does not make `this` refer to that object.
 *
 * 3. Arrow functions are useful for preserving the
 *    surrounding `this` inside callbacks and nested functions.
 *
 * 4. Unlike regular functions, arrow functions cannot
 *    have their `this` value changed using call(),
 *    apply(), or bind().
 */


/**
 * توابع Arrow و رفتار this
 *
 * توابع Arrow مقدار this اختصاصی خودشان را ندارند.
 *
 * در عوض، مقدار this را از محیط لغوی اطراف خود
 * به ارث می‌برند.
 *
 * به این رفتار Lexical this گفته می‌شود.
 *
 * نکات مهم:
 *
 * ۱. مقدار this درون Arrow Function بر اساس محیط
 *    تعریف آن مشخص می‌شود.
 *
 * ۲. فراخوانی یک Arrow Function به‌عنوان متد آبجکت
 *    باعث نمی‌شود this به همان آبجکت اشاره کند.
 *
 * ۳. Arrow Function برای حفظ مقدار this محیط بیرونی
 *    در Callbackها و توابع تو در تو کاربرد دارد.
 *
 * ۴. برخلاف توابع معمولی، نمی‌توان با call()،
 *    apply() یا bind() مقدار this یک Arrow Function
 *    را تغییر داد.
 */




/**
 * Arrow Functions and Lexical this
 *
 * Arrow functions do not have their own `this`.
 * They inherit `this` from their surrounding lexical environment.
 *
 * -----------------------------------------------
 *
 * توابع Arrow مقدار this اختصاصی ندارند.
 * آن‌ها this را از محیط لغوی اطراف خود به ارث می‌برند.
 */


// Example 1: Arrow function as an object method

const developer = {
  name: "Alex",

  showName: () => {
    console.log(this.name);
  },
};

developer.showName();

// Expected Output:
// undefined
// Assumption: Non-module browser script.
// The arrow function inherits the global `this`,
// not the developer object.


// Example 2: Arrow function inside a regular method

const user = {
  name: "Sarah",

  showName() {
    const getName = () => {
      console.log(this.name);
    };

    getName();
  },
};

user.showName();

// Expected Output:
// Sarah
//
// The regular method receives `this` from its call site.
// The arrow function inherits that same `this`.


// Example 3: Regular function vs Arrow function

const person = {
  name: "John",

  regularFunction() {
    console.log(this.name);
  },

  arrowFunction: () => {
    console.log(this.name);
  },
};

person.regularFunction();

// Expected Output:
// John

person.arrowFunction();

// Expected Output:
// undefined
// Assumption: Non-module browser script.


// Example 4: Lexical this inside a callback

const employee = {
  name: "Michael",

  showName() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

employee.showName();

// Expected Output after approximately 1 second:
// Michael
//
// The arrow function preserves the `this` value
// from the surrounding showName() method.


// Example 5: call(), apply(), and bind() cannot
// change the lexical this of an arrow function

const firstUser = {
  name: "Alex",
};

const secondUser = {
  name: "Sarah",
};

const showThis = () => {
  console.log(this.name);
};

showThis.call(firstUser);
showThis.apply(secondUser);

const boundShowThis = showThis.bind(firstUser);
boundShowThis();

// Expected Output:
// undefined
// undefined
// undefined
//
// Assumption: Non-module browser script.
// call(), apply(), and bind() cannot override
// an arrow function's lexical this.
