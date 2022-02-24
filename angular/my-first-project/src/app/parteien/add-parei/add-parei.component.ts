import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-add-parei',
  templateUrl: './add-parei.component.html',
  styleUrls: ['./add-parei.component.css']
})
export class AddPareiComponent implements OnInit {
  newParteiType="";
  newParteiName="";
  newParteiMembers=0;
  @Output() parteiCreated = new EventEmitter<{parteiType:string, name:string, members:number}>();
  onParteiAdd(){
    this.parteiCreated.emit({
      parteiType:this.newParteiType,
      name:this.newParteiName,
      members: this.newParteiMembers
    });
    this.newParteiType="";
    this.newParteiName="";
    this.newParteiMembers=0;    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
