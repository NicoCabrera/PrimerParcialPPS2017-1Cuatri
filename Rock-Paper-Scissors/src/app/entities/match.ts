import { MatchResult } from "./game";

export class Match {
    username: string;
    games: any[];
    date:string;
    result:MatchResult;
    constructor() {
        this.games = [];
        this.username = "";
        this.date = "";
    }
}