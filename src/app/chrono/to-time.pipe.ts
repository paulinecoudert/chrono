import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTime'
})
export class ToTimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): any {
    let minutes = Math.floor(value / 60000);
    let secondes = Math.floor(value % 60000 /1000);
    let millisecondes = value % 1000;
    return ('0'+ minutes).slice(-2) + ':' + ('0'+secondes).slice(-2) + ':' + ('0'+millisecondes).slice(-3);
  }

}
