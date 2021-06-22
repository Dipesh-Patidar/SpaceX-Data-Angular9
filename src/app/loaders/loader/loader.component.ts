import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  showcomments:any
  loading$ = this.loader.loading$
  constructor(public loader:LoaderService,private http:HttpClient) { }

  ngOnInit(): void {
  }

  fetchData() {
    this.http.get('https://jsonplaceholder.typicode.com/comments/1').subscribe((res) =>{
     this.showcomments = res 
    console.log(res);
    })
  }

}
