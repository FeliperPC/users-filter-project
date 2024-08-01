import { Component } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { usersList as UserList} from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  usersListFiltered : IUser[] = [] as IUser[];
  usersList : IUser[] = [] as IUser[];
  user = {} as IUser
  filteredElement : IFilterOptions = {} as IFilterOptions

  ngOnInit(): void {
    setTimeout(() => {
      this.usersListFiltered = UserList // capturando o objeto data para o componente pai app component para posteriormente ser manipulado
      this.usersList = UserList
    },1)
  }
  getUserSelected(userSelected : IUser){
    this.user = userSelected
    this.showUserDetails = true
  }
  showUserDetails: boolean = false

  setFilterElement(filterOptions:IFilterOptions){
    this.filteredElement = filterOptions
    console.log(this.filteredElement);
    
  }
  
}
