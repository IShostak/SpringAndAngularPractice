var sports = ['Golf', "Box", "Basketball"];
for (var index = 0; index < sports.length; index++) {
    console.log(sports[index]);
}
sports.push("Football");
sports.push("Karate");
console.log("\n New list: \n");
//for each loop
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var tempSport = sports_1[_i];
    console.log(tempSport);
}
