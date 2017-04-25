export class Answer {
    constructor(
        public text: string,
        public answerId: number,
        public questionId?: number,
        public isRight?: boolean) { }
}