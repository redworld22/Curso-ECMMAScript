// enahced object literals

function newUser(user, age, country, uId) {
    return{
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("redworld", 42, "RD", 1));