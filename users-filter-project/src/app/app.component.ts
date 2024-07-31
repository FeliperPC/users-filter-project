import { Component } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { usersList } from './data/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  userList : IUser[] = [] as IUser[];
  user = {} as IUser

  ngOnInit(): void {
    setTimeout(() => {
      this.userList = usersList // capturando o objeto data para o componente pai app component para posteriormente ser manipulado
    },1)
  }
  getUserSelected(userSelected : IUser){
    this.user = userSelected
    this.showUserDetails = true
  }
  showUserDetails: boolean = false
  
}
