import { isWithinInterval } from "date-fns"
import { IUser } from "../interfaces/user/user.interface"
import { IFilterOptions } from "../interfaces/filter-options.interface"

  const filterUsersByName = (name: string, usersList: IUser[]) : IUser[] => {
    const INVALID_NAME = name === undefined || name === null
    
    if(INVALID_NAME){
      return usersList
    }
  
    const checkDateInterval = (user : IUser)=> user.nome.toLocaleLowerCase().includes(name.toLocaleLowerCase()) // Separeting the logic in a function
  
    const filteredList = usersList.filter(checkDateInterval)
    return filteredList
  }

   const filterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] => {
    const DATE_NOT_SELECTED = startDate === undefined || endDate === undefined
    
    if(DATE_NOT_SELECTED){
      return usersList
    }
  
    const listFiltered = usersList.filter((user)=> isWithinInterval(new Date(user.dataCadastro),{start:startDate,end:endDate}))
    return listFiltered
  }
  
  
   const filterUsersByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
    const INVALID_STATUS = status === undefined || status === null
    
    if(INVALID_STATUS){
      return usersList
    }
    const filteredList = usersList.filter((user)=> user.ativo === status)
    return filteredList
  }
  
  export const filterUserList = (filterOptions: IFilterOptions, usersList: IUser[]): IUser[] => {
    let filteredList = [] as IUser[];
    filteredList  = filterUsersByName(filterOptions.name,usersList);
    filteredList  = filterUsersByStatus(filterOptions.status,filteredList);
    filteredList = filterUsersListByDate(filterOptions.startDate,filterOptions.endDate,filteredList);
    return filteredList
  }
