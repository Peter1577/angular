import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-laptop-detail',
  templateUrl: './laptop-detail.component.html',
  styleUrls: ['./laptop-detail.component.css']
})
export class LaptopDetailComponent implements OnInit {

  laptopid:string;
  constructor (private route : ActivatedRoute ){

  }

  ngOnInit(): void {
      alert("ngonit has been called from the server");
    this.laptopid = this.route.snapshot.paramMap.get('id');

  }

}
