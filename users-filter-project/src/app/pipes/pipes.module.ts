import { NgModule } from "@angular/core";
import { PhonePipe } from './phone.pipe';
import { AddressPipe } from './address.pipe';
import { StatusPipe } from './status.pipe';
import { DashEmptyPipePipe } from './dash-empty-pipe.pipe';

@NgModule({
    declarations:[
    PhonePipe,
    AddressPipe,
    StatusPipe,
    DashEmptyPipePipe
  ],
    exports:[
        PhonePipe,
        AddressPipe,
        StatusPipe,
        DashEmptyPipePipe
    ]
})

export class PipesModule{

}