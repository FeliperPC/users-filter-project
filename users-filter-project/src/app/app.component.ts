import { Component } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { usersList as UserList, usersList} from './data/users-list';
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
      this.usersList = UserList
      this.usersListFiltered = this.usersList // capturando o objeto data para o componente pai app component para posteriormente ser manipulado
    },1)
  }
  getUserSelected(userSelected : IUser){
    this.user = userSelected
    this.showUserDetails = true
  }
  showUserDetails: boolean = false

  setFilterElement(filterOptions:IFilterOptions){
    this.filteredElement = filterOptions
    
    this.usersListFiltered = this.filterUserList(filterOptions, this.usersList);
  }

  filterUserList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {
    let filteredList = [] as IUser[];
    filteredList  = filterUsersByName(filterOptions.name,usersList);
    filteredList  = filterUsersByStatus(filterOptions.status,filteredList
    
    );
    return filteredList
  }
  
}
function filterUsersByName(name: string, usersList: IUser[]) : IUser[] {
  const INVALID_NAME = name === undefined || name === null
  
  if(INVALID_NAME){
    return usersList
  }

  const filteredList = usersList.filter((user)=> user.nome.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
  return filteredList
}

function filterUsersByStatus(status: boolean | undefined, usersList: IUser[]): IUser[] {
  const INVALID_STATUS = status === undefined || status === null
  
  if(INVALID_STATUS){
    return usersList
  }
  const filteredList = usersList.filter((user)=> user.ativo === status)
  return filteredList
}

