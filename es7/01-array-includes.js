const ages = [42, 14, 69, 86, 41, 44];

console.log(ages.includes(42));


const names = ["Red", "Darwin", "Allen", "Carmen", "Ariel", "Robin", "Jenson"];

console.log(names.includes("Jenson"));
console.log(names.includes("allen"));



let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(
	familyEmoji.includes("👨"),
	familyEmoji.includes("👩"),
	familyEmoji.includes("👦")
);
