import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacexDataComponent } from './spacex-data/spacex-data.component';
import { SpaceRoutingModule } from './space-routing.module';





@NgModule({
  declarations: [SpacexDataComponent],
  imports: [
    CommonModule,
    SpaceRoutingModule
  ],
  exports:[SpacexDataComponent]
  ,

  providers:[
  
  ]
})
export class SpacexModule { }
