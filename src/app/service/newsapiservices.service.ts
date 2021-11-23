import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { businessApiurl, newsApiurl, techApiurl } from 'src/environments/environment.prod';
import { BusbusinessComponent } from '../busbusiness/busbusiness.component';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //newsapiurl
  newsApiurl=newsApiurl.apiURL;
  
  //tech news apiurl
  techApiurl=techApiurl.apiURL;

  //business news apiurl
  businessApiurl=businessApiurl.apiURL;

  

  //top headings
  topHeading():Observable<any>{
    return this._http.get(this.newsApiurl);
  }

  //top tech news
  techNews():Observable<any>{
    return this._http.get(this.techApiurl);
  }

  //top business news
  businessNews():Observable<any>{
    return this._http.get(this.businessApiurl);
  }

}
