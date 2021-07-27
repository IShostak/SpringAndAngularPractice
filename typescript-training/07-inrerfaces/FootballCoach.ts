import { Coach } from "./Coach";

export class FootballCoach implements Coach {

    doStuff(): string {
        return "Run baby! Run!";
    }

}