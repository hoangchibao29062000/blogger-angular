import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tuoi'
})
export class TuoiPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if(value != null) {
      let currentDay = new Date;
      let ngsinh = new Date(value);
      let currentYear = currentDay.getFullYear();
      let birday = ngsinh.getFullYear();

      let age = currentYear - birday;

      return `Ban duoc ${age} tuoi`;
    }
    return null;
  }

}
