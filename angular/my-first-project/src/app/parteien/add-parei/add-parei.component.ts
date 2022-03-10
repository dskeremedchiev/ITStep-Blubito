import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-add-parei',
  templateUrl: './add-parei.component.html',
  styleUrls: ['./add-parei.component.css']
})
export class AddPareiComponent implements OnInit {
  // newParteiType="";
  // newParteiName="";
  newParteiMembers=0; // Re-work newParteiMembers using Local Ref or ViewChild methods
  @Output() parteiCreated = new EventEmitter<{parteiType:string, name:string, members:number, candidateList:string[]}>();
  @ViewChild('newParteiTypeInput') newParteiTypeInput!:ElementRef;
  onParteiAdd(newParteiNameInput:HTMLInputElement){
    this.parteiCreated.emit({
      parteiType:this.newParteiTypeInput.nativeElement.value,
      name:newParteiNameInput.value,
      members: this.newParteiMembers,
      candidateList: []
    });
    newParteiNameInput.value="";
    // this.newParteiType="";
    // this.newParteiName="";
    this.newParteiMembers=0;    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
