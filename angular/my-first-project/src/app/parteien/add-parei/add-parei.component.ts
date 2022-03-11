import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';
import { ParteiDataService } from '../../services/parteiData.service';


@Component({
  selector: 'app-add-parei',
  templateUrl: './add-parei.component.html',
  styleUrls: ['./add-parei.component.css'],
})
export class AddPareiComponent implements OnInit {
  // newParteiType="";
  // newParteiName="";
  newParteiMembers = 0; // Re-work newParteiMembers using Local Ref or ViewChild methods
  //@Output() parteiCreated = new EventEmitter<{parteiType:string, name:string, members:number, candidateList:string[]}>();
  @ViewChild('newParteiTypeInput') newParteiTypeInput!: ElementRef;

  constructor(
    private loggingService: LoggingService,
    private parteiDataService: ParteiDataService,
  ) { }

  ngOnInit(): void { }

  onParteiAdd(newParteiNameInput: HTMLInputElement) {
    this.loggingService.logParteiDataChange('new partai is created:' + newParteiNameInput.value);
    this.parteiDataService.addPartai({
      parteiType: this.newParteiTypeInput.nativeElement.value,
      name: newParteiNameInput.value,
      members: this.newParteiMembers,
      candidateList: []
    })
    // this.parteiCreated.emit({
    //   parteiType:this.newParteiTypeInput.nativeElement.value,
    //   name:newParteiNameInput.value,
    //   members: this.newParteiMembers,
    //   candidateList: []
    // });
    newParteiNameInput.value = "";
    // this.newParteiType="";
    // this.newParteiName="";
    this.newParteiMembers = 0;
  }


}
