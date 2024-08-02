import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core'; 
import { IUser } from '../../interfaces/user/user.interface';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  // usersList : IUser[] = UserList; // declara a base de dados da tabela
  displayedColumns: string[] = ['name', 'date', 'status']; // declara as colunas da tabela
  user: any;

@Output() userSelected = new EventEmitter<IUser>()
@Input() usersList : IUser[] = [] as IUser[]
  onUsersSelected(element : IUser){
    this.userSelected.emit(element)
  }
}
