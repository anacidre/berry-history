import { Component } from '@angular/core';
import * as bbCard from '../assets/web-components/custom-card/custom-card.js';


@Component({
  selector: 'berry-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'berry-history';
  constructor(){
    console.log(bbCard);
  }
}
