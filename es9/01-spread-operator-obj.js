const user = { username: "redworld22", age: 34, country: "CO" };

const { username, ...values } = user;

console.log(values);
