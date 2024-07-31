import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  //@Input({required:true, alias:'user'}) userSelected = {} as IUser; // Uma forma de inicializar objetos vazios que tem um tipo
  @Input({required:true}) user : Partial<IUser> =  {}; // Outra forma de inicializar objetos vazios que tem um tipo
  
}
