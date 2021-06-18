import { Component, OnInit } from '@angular/core';
import {SpacexService} from '../../services/spacex.service'

@Component({
  selector: 'app-spacex-data',
  templateUrl: './spacex-data.component.html',
  styleUrls: ['./spacex-data.component.css']
})
export class SpacexDataComponent implements OnInit {
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
