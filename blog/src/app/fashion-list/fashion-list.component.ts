import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fashion-list',
  templateUrl: './fashion-list.component.html',
  styleUrls: ['./fashion-list.component.css']
})
export class FashionListComponent implements OnInit{

  fashionid:string;

  constructor(private route : ActivatedRoute){

  }

  ngOnInit(): void {
      alert("server called");
      this.fashionid = this.route.snapshot.paramMap.get("id");
  }
}
