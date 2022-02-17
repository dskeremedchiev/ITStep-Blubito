import { Component } from '@angular/core';

@Component({
  // selector: 'app-parteien', // element
  // selector: '.app-parteien', //classname
  selector: '[app-parteien]', // attribute


  templateUrl: './parteien.component.html',
  // styleUrls: ['./parteien.component.css']
  styles: [`h4{display: inline;}`,]
})
export class ParteienComponent {

  constructor() { }

}
