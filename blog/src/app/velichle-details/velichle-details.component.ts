import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-velichle-details',
  templateUrl: './velichle-details.component.html',
  styleUrls: ['./velichle-details.component.css']
})
export class VelichleDetailsComponent implements OnInit {

  details:string;

  constructor(private route : ActivatedRoute){

  }

  ngOnInit(): void {

      alert("success");
      
      this.details=this.route.snapshot.paramMap.get("id");
  }

}
