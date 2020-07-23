import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiDataService: ApiDataService) { }

  shoppingList:any = [];

  getShoppinglist():  void{
    this.apiDataService.getShoppinglist()
    .subscribe(shoppingList => {
      this.shoppingList = shoppingList
    });
  }

  ngOnInit(): void {
    this.getShoppinglist();
  }

}
