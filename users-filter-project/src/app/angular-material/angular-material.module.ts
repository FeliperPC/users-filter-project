import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { provideNativeDateAdapter } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";

import {MatDividerModule} from '@angular/material/divider';
import { MatInputModule } from "@angular/material/input";
import {MatListModule} from '@angular/material/list';
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";

@NgModule({
    imports:[
        MatListModule, 
        MatDividerModule,
        MatInputModule,
        MatDatepickerModule,
        MatSelectModule, 
        MatInputModule,
        MatButtonModule,
        MatTableModule,
    ],

    providers: [provideNativeDateAdapter()],

    exports:[
        MatListModule, 
        MatDividerModule,
        MatInputModule,
        MatDatepickerModule,
        MatSelectModule, 
        MatInputModule,
        MatButtonModule,
        MatTableModule,
    ]
})

export class AngularMaterialModule { }
