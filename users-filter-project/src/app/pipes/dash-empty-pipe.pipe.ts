import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashEmptyPipe'
})
export class DashEmptyPipePipe implements PipeTransform {

  transform(value: any) : any | string {
    const EMPTY_VALUE = value === undefined || value === null || value === '';
    if(EMPTY_VALUE){
      return '-'
    } 
    return value
  }

}
