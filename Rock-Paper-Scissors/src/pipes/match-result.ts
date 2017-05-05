import { Pipe, PipeTransform } from '@angular/core';
import { MatchResult } from "../app/entities/game";

@Pipe({
  name: 'MatchResultPipe',
})
export class MatchResultPipe implements PipeTransform {

  transform(value: MatchResult, ...args) {
    let rv: string = "";
    switch (value) {
      case MatchResult.Win:
        rv = "Win";
        break;
      case MatchResult.Lose:
        rv = "Lose";
        break;
      default:
        rv = "Draw";
        break;
    }
    return rv;
  }
}
