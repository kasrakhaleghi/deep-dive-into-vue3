/**
 * The this Keyword
 *
 * In JavaScript, `this` is a special keyword that refers to
 * a value determined by how a function is called.
 *
 * This in Object Methods:
 *
 * When a function is called as a method of an object,
 * `this` refers to the object used to call that method.
 *
 * The same function can be used by multiple objects.
 * However, the value of `this` depends on which object
 * is used to invoke the function.
 *
 * Important:
 * The value of `this` in a regular function is determined
 * by its invocation context, not simply by where the function
 * was originally defined.
 */


/**
 * کلمه کلیدی this
 *
 * در JavaScript، کلمه کلیدی this به یک مقدار مشخص اشاره می‌کند
 * که بر اساس نحوه فراخوانی تابع تعیین می‌شود.
 *
 * this در متدهای آبجکت:
 *
 * زمانی که یک تابع به‌عنوان متد یک آبجکت فراخوانی می‌شود،
 * this به آبجکتی اشاره می‌کند که متد از طریق آن فراخوانی شده است.
 *
 * یک تابع می‌تواند توسط چند آبجکت مختلف استفاده شود.
 * با این حال، مقدار this به آبجکتی بستگی دارد که تابع را
 * از طریق آن فراخوانی می‌کنیم.
 *
 * نکته مهم:
 * مقدار this در یک تابع معمولی بر اساس نحوه فراخوانی آن
 * تعیین می‌شود، نه صرفاً محلی که تابع در آن تعریف شده است.
 */

const user1 = {
  name: "John",
  role: "Frontend Developer",

  introduce() {
    console.log(`My name is ${this.name}`);
    console.log(`My role is ${this.role}`);
  }
};

const user2 = {
  name: "Ali",
  role: "Backend Developer",

  introduce: user1.introduce
};

const user3 = {
  name: "Sara",
  role: "UI Designer",

  introduce: user1.introduce
};

user1.introduce();
// My name is John
// My role is Frontend Developer

user2.introduce();
// My name is Ali
// My role is Backend Developer

user3.introduce();
// My name is Sara
// My role is UI Designer