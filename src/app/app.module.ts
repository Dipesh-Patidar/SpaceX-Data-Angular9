import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './loaders/loader/loader.component';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button'
import { NetworkInterceptor } from './network.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoaderComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [
   {
     provide:HTTP_INTERCEPTORS,
     useClass: NetworkInterceptor,
     multi:true
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
