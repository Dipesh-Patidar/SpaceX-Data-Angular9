import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  constructor(private http:HttpClient) { }



  getYear(value):Observable<any>{
  
    const urlyear = `https://api.spacexdata.com/v3/launches?limit=100&launch_year=${value}`
    return this.http.get<any>(urlyear)
  }
  
  
  getLaunching(value):Observable<any>{
    const urllaunch = `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${value}`
    return this.http.get<any>(urllaunch)
  }
  
  getLanding(value):Observable<any>{
    
        const urllaunch = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${value}&lan%d_success=${value}`
    return this.http.get<any>(urllaunch)
  }



}
