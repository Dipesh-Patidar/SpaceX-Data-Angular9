import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacexDataComponent } from './spacex-data/spacex-data.component';
import { SpaceRoutingModule } from './space-routing.module';
import { SpacexService } from '../services/spacex.service';



@NgModule({
  declarations: [SpacexDataComponent],
  imports: [
    CommonModule,
    SpaceRoutingModule
  ],
  exports:[SpacexDataComponent],
  providers:[SpacexService]
})
export class SpacexModule { }
