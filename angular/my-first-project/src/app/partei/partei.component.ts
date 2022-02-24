import { Component, EventEmitter, Input, Output } from "@angular/core";
@Component({
  selector: 'app-partei',
  templateUrl: './partei.component.html',

  styleUrls: ['./partei.component.css'],
})

export class ParteiComponent {
  @Input('partei') parteiElement!:{parteiType:string, name:string, members:number};
  @Input() parteiId!:number;
  @Output() parteiDeleted = new EventEmitter<{id:number}>();

  removePartei(parteiId:number){
    this.parteiDeleted.emit({id:parteiId})
  }
  getParteiFullName(){
    return `${this.parteiElement.parteiType} ${this.parteiElement.name}!`;
  }
  //Die Sozialpolitische Partei 

}