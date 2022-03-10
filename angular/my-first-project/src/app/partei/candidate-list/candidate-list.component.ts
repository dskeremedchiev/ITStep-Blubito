import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  @Input() candidates!:string[];
  @Input() parteiId!:number;
  @Output() canidateCreated = new EventEmitter<{candidateName:string}>();
  constructor() { }
  onAddCandidate(newCandidateNameInput:HTMLInputElement){
    // let logged = {parteiId: this.parteiId, candidateName : newCandidateNameInput.value};
    // console.log(logged);
    this.canidateCreated.emit({
      candidateName:newCandidateNameInput.value,
    });   
  }
  ngOnInit(): void {
  }

}


