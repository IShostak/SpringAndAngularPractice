import {Coach} from "./Coach";
 
export class CricketCoach implements Coach {

    doStuff(): string {
        return "Practice your spin!";
    }
}