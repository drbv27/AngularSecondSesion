import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  transform(base: number, exp: number): number {
    return Math.pow(base, exp);
  }

}
