import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skin-details',
  templateUrl: './skin-details.component.html',
  styleUrls: ['./skin-details.component.css']
})
export class SkinDetailsComponent implements OnInit{
  
  skinlist:string
  constructor(private route : ActivatedRoute){

  }

  ngOnInit(): void {
      alert("sevice has been called");
     this.skinlist = this.route.snapshot.paramMap.get("id");
  }

}
