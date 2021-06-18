import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {AppComponent} from './app.component'
import { MainComponent } from './main/main.component';
import {SpacexDataComponent} from './spacex/spacex-data/spacex-data.component'

const routes: Routes = [
  {path:'',redirectTo:'/main',pathMatch:'full'},
  {path:'main' ,component:MainComponent},
  {
    path:'sp' ,
    loadChildren:() => import('./spacex/spacex.module').then((m)=>m.SpacexModule
    )
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { preloadingStrategy :PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
