import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ParteiDataService } from '../services/parteiData.service';

@Component({
  selector: 'app-view-partei',
  templateUrl: './view-partei.component.html',
  styleUrls: ['./view-partei.component.css']
})
export class ViewParteiComponent implements OnInit {
  id: number = 0;
  partei:{ parteiType: string, name: string, members: number, candidateList: string[] }={
    parteiType:"",
    name:"",
    members:0,
    candidateList:[]
  };
  parteiType="";
  constructor(
    private route: ActivatedRoute,
    private parteiDataService: ParteiDataService,

  ) { console.log('constructor');}

  ngOnInit(): void {
    this.id=+this.route.snapshot.params['id'];
    this.partei = this.parteiDataService.parteiList[this.id];
    this.parteiType = this.partei.parteiType;
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = +params['id'];
        this.partei = this.parteiDataService.parteiList[this.id];
        this.parteiType = this.partei.parteiType;
      }
    )
  }

}
