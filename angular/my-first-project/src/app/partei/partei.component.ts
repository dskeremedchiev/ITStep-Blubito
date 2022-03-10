import { 
  Component, 
  EventEmitter, 
  Input, 
  OnChanges, 
  OnInit, 
  DoCheck,
  Output, 
  ViewEncapsulation,
  ViewChild,
  SimpleChanges,
  AfterContentInit,
  AfterContentChecked,
  ElementRef,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from "@angular/core";
@Component({
  selector: 'app-partei',
  templateUrl: './partei.component.html',
  styleUrls: ['./partei.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})

export class ParteiComponent  
    // implements 
    // OnInit, 
    // OnChanges, 
    // DoCheck, 
    // AfterContentInit,
    // AfterContentChecked,
    // AfterViewInit,
    // AfterViewChecked,
    // OnDestroy
{
  @Input('partei') parteiElement!:{parteiType:string, name:string, members:number, candidateList:string[]};
  @Input() parteiId!:number;
  @Input() testhtml!:string;
  @Input() parteiType!:string;
  @Input() testArray!:number[];
  @Output() onCanidateCreated = new EventEmitter<{parteiId:number, candidateName:string}>();

  @ViewChild('myH4Element') myH4Element!:ElementRef;
  showList=false;
  constructor(){
    // console.log("Constructor called");
    // console.log("H4 element:");
    // console.log(this.myH4Element);

  } 
  canidateCreated(candidateData: {candidateName:string}){
    console.log("New candidate", candidateData.candidateName, 
    " ID:", this.parteiId);
    //emit to parent 
     this.onCanidateCreated.emit({
     parteiId: this.parteiId,
     candidateName:candidateData.candidateName,
     });
  }
  
  changeParteiData(){
    // this.parteiElement.members = 10000;
    // this.parteiType = "NewParteiType";
    // this.testArray.push(4);
    // console.log(this.myH4Element);
  }
  // ngOnChanges(smplChanges: SimpleChanges):void{

  //   console.log("ngOnChanges called");
  //   console.log(smplChanges);
  //   console.log("H4 element:");
  //   console.log(this.myH4Element);
  // }
  // ngOnInit(): void {
  //   console.log("ngOnInit called");
  //   console.log("H4 element:");
  //   console.log(this.myH4Element);
  // }

  // ngDoCheck(): void{
  //   console.log("doCheck called");
  //   console.log("Type is:" + this.parteiType);
  //   console.log("H4 element:");
  //   console.log(this.myH4Element);    
  // }
  // ngAfterContentInit():void{
  //   console.log("ngAfterContentInit called");
  //   console.log("H4 element:");
  //   console.log(this.myH4Element); 
  // }
  // ngAfterContentChecked():void{
  //   console.log("ngAfterContentChecked called");
  //   console.log("Type is:" + this.parteiType);
  //   console.log("H4 element:");
  //   console.log(this.myH4Element);
  // }
  // ngAfterViewInit(): void{
  //   console.log("ngAfterViewInit called");
  //   console.log("H4 element:");
  //   console.log(this.myH4Element);    
  // }

  // ngAfterViewChecked():void{
  //   console.log("ngAfterViewChecked called");   
  // }
  // ngOnDestroy(): void{
  //   console.log("Object destroyed. Id was:", this.parteiId);
  // }

  // @Output() parteiDeleted = new EventEmitter<{id:number}>();

  // removePartei(parteiId:number){
  //   this.parteiDeleted.emit({id:parteiId})
  // }
  getParteiFullName(){
    return `${this.parteiElement.parteiType} ${this.parteiElement.name}!`;
  }
  //Die Sozialpolitische Partei 

}

