import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Resource } from 'ng2-rest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public value: Observable<string>;

  constructor() {

  }

}