import { Component } from '@angular/core';
import {SpacexService} from './services/spacex.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 years:any;
 y:any
constructor(private spacex:SpacexService){}

ngOnInit(){

  this.getYear(2006)
 

}
getYear(value:any){
  this.spacex.getYear(value).subscribe((data)=>{
    this.years = data;
    console.log(data)
  })
}


getLaunching(value:any){
  this.spacex.getLaunching(value).subscribe((data)=>{
    this.years = data;
    console.log(data)
  })
}

getLanding(value:any){
  this.spacex.getLanding(value).subscribe((data)=>{
    this.years = data;
    console.log(data)
  })
}

}
