const user = {
  name: "Kasra",
  age: 28,
};

const proxyUser = new Proxy(user, {});

console.log(proxyUser.name);

proxyUser.age = 29;

console.log(user.age);