import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/address.interface';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(objAdress: IAddress | undefined): string {
    const INVALIDADRESS = !objAdress || !objAdress.rua || !objAdress.cidade || !objAdress.estado 
      || objAdress.numero === null || objAdress.numero === undefined;

    if(INVALIDADRESS){
      return 'Invalid Adress'
    }

    return `${objAdress.rua}, ${objAdress.numero}, ${objAdress.cidade} - ${objAdress.estado}`

  }
}
