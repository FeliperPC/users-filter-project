import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: string| undefined): string { // esse pipe recebe uma string e retorna uma string
    if( !phone || phone.length > 11 || phone.length < 10) {
      return 'Invalid phone number'
    } 
    if(phone.length===11){
      return `(${phone.substring(0, 2)}) ${phone.substring(2, 7)}-${phone.substring(7, 11)}`
    } else {  
      return `(${phone.substring(0,2)} ${phone.substring(2, 6)}) - ${phone.substring(6)}`
    }
  }
}
