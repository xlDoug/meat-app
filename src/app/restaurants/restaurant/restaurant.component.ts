import { Component, OnInit, Input } from '@angular/core';
import { RestaurantInterface } from 'app/restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor() { }
  @Input()restaurant: RestaurantInterface;


  ngOnInit() {
  }

}
