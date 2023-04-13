import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  item:any 
  stars:any
  count:any

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
    if(!history.state.item){
      // this.location.back()
    }else{
      this.item = history.state.item
    }
    this.stars = [
      {
        no: 5,
        percent: '80%',
        count: '1.5k'
      },
      {
        no: 4,
        percent: '40%',
        count: '710'
      },
      {
        no: 3,
        percent: '25%',
        count: '140'
      },
      {
        no: 2,
        percent: '15%',
        count: '10'
      },
      {
        no: 1,
        percent: '8%',
        count: '4'
      }
    ]

    this.count = [
      {imageLink: 'assets/images/shirt-removebg-preview.png'},
      {imageLink: 'assets/images/shirt22-removebg-preview.png'},
    ]
  }

}
