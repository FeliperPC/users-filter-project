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
    startDate: undefined, // ou posso tipar e colocar undefined
    endDate: undefined,
    status: undefined
  }

  status = [
    {value:true, viewValue:'Active'}, 
    {value:false, viewValue:'Inactive'}
  ];
  
  @Output() onFilterEmit = new EventEmitter<IFilterOptions>() 
  @Output() clearFilterEmit = new EventEmitter<void>()
  
  onFilter(){
    this.onFilterEmit.emit(this.filterOptions)
  }
  onClearFilter() {
    this.clearInputsValues()
    this.clearFilterEmit.emit()
  }

  clearInputsValues() {
    this.filterOptions.name = ''
    this.filterOptions.status = undefined
    this.filterOptions.startDate = ' ' as unknown as Date
    this.filterOptions.endDate = ' ' as unknown as Date
  }
}

