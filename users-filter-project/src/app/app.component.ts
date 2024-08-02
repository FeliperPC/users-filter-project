import { Component } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { usersList as UserList, usersList} from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { filterUserList } from './utils/filter-users-list';

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
      this.usersList = UserList
      this.usersListFiltered = this.usersList // capturando o objeto data para o componente pai app component para posteriormente ser manipulado
    },1)
  }
  getUserSelected(userSelected : IUser){
    this.user = userSelected
    this.showUserDetails = true
  }
  showUserDetails: boolean = false

  clearFilter(){  
    this.usersListFiltered = this.usersList      
  }

  setFilterElement(filterOptions:IFilterOptions){
    this.filteredElement = filterOptions
    
    this.usersListFiltered = filterUserList(filterOptions, this.usersList);
  }  
  // functions separeted in the utils file so the app component file doesn't extend too much
  
}

