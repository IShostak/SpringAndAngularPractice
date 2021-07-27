"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FootballCoach_1 = require("./FootballCoach");
var CricketCoach_1 = require("./CricketCoach");
var coach = new FootballCoach_1.FootballCoach();
var master = new CricketCoach_1.CricketCoach();
var coaches = [];
coaches.push(coach);
coaches.push(master);
for (var _i = 0, coaches_1 = coaches; _i < coaches_1.length; _i++) {
    var temp = coaches_1[_i];
    console.log(temp.doStuff());
}
