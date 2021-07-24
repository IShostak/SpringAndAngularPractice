let sports : string[] = ['Golf',  "Box", "Basketball"];

for (let index = 0; index < sports.length; index++) {
    console.log(sports[index]);
}

sports.push("Football");
sports.push("Karate");

console.log("\n New list: \n")


//for each loop
for(let tempSport of sports) {
    console.log(tempSport);
}