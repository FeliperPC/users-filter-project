import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";

@NgModule({ // Não esquecer dos decoratos, que de fato irão especificar que essa classe é um modulo
    declarations:[],
    imports:[
        AngularMaterialModule,
    ],
    exports:[]
})

export class ComponentsModule { 

}