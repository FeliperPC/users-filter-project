import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  names = [{value:'Joshua', viewValue:'Joshua'}, {value:'Felipe', viewValue:'Felipe'}, {value:'Daniel', viewValue:'Daniel'}];
}
