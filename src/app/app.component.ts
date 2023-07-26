import { Component } from '@angular/core';
import { Spinkit } from 'ng-http-loader';
import { NgxLoader } from "ngx-http-loader"; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product-helper';
  public spinkit = Spinkit;
  public loader = NgxLoader;
  
}
