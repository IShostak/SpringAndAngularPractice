import {FootballCoach} from "./FootballCoach";
import {CricketCoach} from "./CricketCoach";
import { Coach } from "./Coach";

let coach = new FootballCoach();
let master = new CricketCoach();

let coaches : Coach[] = [];

coaches.push(coach);
coaches.push(master);

for (let temp of coaches) {
    console.log(temp.doStuff());
}

