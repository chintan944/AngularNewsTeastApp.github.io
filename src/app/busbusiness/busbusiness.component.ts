import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-busbusiness',
  templateUrl: './busbusiness.component.html',
  styleUrls: ['./busbusiness.component.css']
})
export class BusbusinessComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }
  businessNewsDisplay:any=[];

  ngOnInit(): void {
    this._services.businessNews().subscribe((result) => {
      console.log(result);
      this.businessNewsDisplay=result.articles;
    });
  }

}
