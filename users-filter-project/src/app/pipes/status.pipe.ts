import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(status : boolean | undefined): string {
    const INVALIDSTATUS = status === undefined || status === null
    
    if(INVALIDSTATUS){
      return 'Invalid status'
    }

    if(!status){
      return 'Inactive'
    }

    return 'Active'
  }
}
