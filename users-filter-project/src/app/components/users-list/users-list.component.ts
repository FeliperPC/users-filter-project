import { Component } from '@angular/core'; 
import { IUser } from '../../interfaces/user/user.interface';
import {usersList as UserList} from '../../data/users-list'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  usersList : IUser[] = UserList; // declara a base de dados da tabela
  displayedColumns: string[] = ['name', 'date', 'status']; // declara as colunas da tabela
user: any;

  onUsersSelected(element : IUser){
    console.log('user', element);
    
  }
}
