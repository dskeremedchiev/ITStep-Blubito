import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CanDeactivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { LoggingService } from 'src/app/services/logging.service';
import { ParteiDataService } from '../../services/parteiData.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';


@Component({
  selector: 'app-add-parei',
  templateUrl: './add-parei.component.html',
  styleUrls: ['./add-parei.component.css'],
})
export class AddPareiComponent implements OnInit, CanComponentDeactivate {
  // newParteiType="";
  // newParteiName="";
  newParteiMembers = 0; // Re-work newParteiMembers using Local Ref or ViewChild methods
  //@Output() parteiCreated = new EventEmitter<{parteiType:string, name:string, members:number, candidateList:string[]}>();
  @ViewChild('newParteiTypeInput') newParteiTypeInput!: ElementRef;
  currentDate = new Date();
  // adding unload route guard 
  changesSaved: boolean = false;
  constructor(
    private loggingService: LoggingService,
    private parteiDataService: ParteiDataService,
    private router: Router,
  ) { }

  ngOnInit(): void { }

  onParteiAdd(newParteiNameInput: HTMLInputElement) {
    //this.loggingService.logParteiDataChange('new partai is created:' + newParteiNameInput.value);
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
    this.changesSaved = true;
    this.router.navigate(['/parteilist']);
    // newParteiNameInput.value = "";
    // this.newParteiType="";
    // this.newParteiName="";
    // this.newParteiMembers = 0;
  }
  canDeactivate(): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree{
    // console.log('deactivate');
    // homework -> check form fields 
    // if not changed -> return true;
    if(!this.changesSaved ){
      return confirm('Do you want to discard changes');
    }
    else{
      return true;
    }
  }


}
