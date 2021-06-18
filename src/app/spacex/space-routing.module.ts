import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { SpacexDataComponent } from "./spacex-data/spacex-data.component";

const routes: Routes = [
    {
        path:'',
        component:SpacexDataComponent
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
export class SpaceRoutingModule { }