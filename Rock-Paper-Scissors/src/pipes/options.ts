import { Pipe, PipeTransform } from '@angular/core';
import { Options } from "../app/entities/game";

/**
 * Generated class for the Options pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'options',
})
export class OptionsPipe implements PipeTransform {
  transform(value: Options, ...args) {
   let rv: string = "";
    switch (value) {
      case Options.Rock:
        rv = "Piedra";
        break;
      case Options.Paper:
        rv = "Papel";
        break;
      default:
        rv = "Tijeras";
        break;
    }
    return rv;
  }
}
