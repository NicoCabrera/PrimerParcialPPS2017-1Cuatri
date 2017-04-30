import { Answer } from "./answer";

export class Question {
    /**
     *
     */
    constructor(public text:string) {
        
    }
    public answers:Answer[];
}