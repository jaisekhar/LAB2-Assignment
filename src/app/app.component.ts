import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public wdata: any;
  public fdata: any;
  public tdata: any;
  private lat: any;
  private lon: any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}
  title = 'jsnew';
  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }
  sendToAPIXU(formValues) {
    this.http
      .get('http://api.openweathermap.org/data/2.5/weather?q=' + formValues.location + '&APPID=3d08ec5c9a0806b20582c4fdd4ce55ca&units=imperial')
      .subscribe(data => { this.wdata = data;
                           console.log(this.wdata);
  });

    this.http
      .get('http://api.openweathermap.org/data/2.5/forecast?q=' + formValues.location + '&APPID=3d08ec5c9a0806b20582c4fdd4ce55ca&units=imperial')
      .subscribe(data => { this.fdata = data;
                           console.log(this.fdata);
      });

  }
  }
