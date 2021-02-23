import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  a =0;
  b=0;
  item=[
    {nama :"Jeruk", harga :"15000", satuan:"kg"},
    {nama :"Apel", harga :"20000", satuan:"kg"}
  ]

  tampil : boolean = false;
}
