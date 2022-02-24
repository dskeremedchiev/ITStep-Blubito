import { Component } from '@angular/core';

@Component({
  selector: 'app-showhints',
  templateUrl: './showhints.component.html',
  styleUrls: ['./showhints.component.css']
})
export class ShowhintsComponent {
  // i = 0;
  showFailed = false;
  hintsAvailable = [
    'Hint 1',
    'Hint 2',
    'Hint 3',
    'Hint 4',
    'Hint 5',
    'Hint 6',
    'Hint 7',
    'Hint 8',
    'Hint 9',
    'Hint 10',
    'Hint 11',
    'Hint 12',
    'Hint 13',
    'Hint 14',
    'Hint 15',
    'Hint 16',
    'Hint 17'
  ];
  startHintsAvaiable = this.hintsAvailable.length;

  hintsShown: string[] = [];
  getBgColor(num:number){
    if((num)===(this.startHintsAvaiable)) return "black";
    if((num)>(this.startHintsAvaiable/1.5-1)) return "red";
    if(num>(this.startHintsAvaiable/3-1)) return "orange";
    return "white";
  }
  showHint() {
    if(this.showFailed) return;
    if(this.hintsAvailable.length===0){
      this.hintsShown.push("You failed");;
      this.showFailed = true;
    } 
    let i:number = Math.floor(Math.random()*this.hintsAvailable.length);
    this.hintsShown.push(this.hintsAvailable[i]);
    this.hintsAvailable.splice(i,1);
    // if (this.i > 9) return;
    // this.i++;
    // if (this.i === 10) {
    //   this.hintsShown.push("You failed");
    //   return;
    // }
    // this.hintsShown.push(this.hintsAvailable[this.i-1]);
  }
  constructor() { }

}
