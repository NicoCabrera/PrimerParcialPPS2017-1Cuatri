export class Game{
    computerRandomOption:Options;
    userChosenOption:Options;
    result:MatchResult;
}

export enum Options {
  Rock = 0,
  Paper,
  Scissor
}
 
export enum MatchResult {
  Lose = -1,
  Draw,
  Win
}