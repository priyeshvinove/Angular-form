import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oneConversion';
  showMsg=false
  switchValue="four";

  users=[
    {id:1,firstname:"Priyesh"},
    {id:2,firstname:"Kuashal"},
    {id:3,firstname:"Pankaj"},
  ]

  readMe(){
    console.log("hello")
    this.showMsg=!this.showMsg
  }
}
