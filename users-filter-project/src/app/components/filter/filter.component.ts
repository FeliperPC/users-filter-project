import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
    filterOptions : IFilterOptions = {
    name:'',
    startDate:'' as unknown as Date, // ou posso tipar e colocar undefined
    endDate:'' as unknown as Date,
    status: undefined
  }

  status = [
    {value:true, viewValue:'Active'}, 
    {value:false, viewValue:'Inactive'}
  ];
  
  @Output() onFilterEmit = new EventEmitter<IFilterOptions>()  
  onFilter(){
    this.onFilterEmit.emit(this.filterOptions)
  }

}
