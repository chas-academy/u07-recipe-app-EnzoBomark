import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'round'})
export class RoundPipe implements PipeTransform {
  transform (input:number) {
    if(input >= 1) return Math.ceil(input);
    return Math.ceil(input * 10) / 10;
  }
}
