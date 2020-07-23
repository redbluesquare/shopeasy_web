import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';

@Component({
  selector: 'app-shop-activity',
  templateUrl: './shop-activity.component.html',
  styleUrls: ['./shop-activity.component.css']
})
export class ShopActivityComponent implements OnInit {

  constructor(
    private apiDataService:ApiDataService
  ) { }
  data:any;
  shops:any;
  shop_id:number;
  searchText:string;
  shopping_status:number = 0;

  addShop(shop_title):  void{
    this.data = {shop_title:shop_title};
    this.apiDataService.addShop(this.data)
    .subscribe(shop_id => {
      this.data = {};
      this.shop_id = shop_id;
      this.shopping_status = 1;
    });
  }

  getShops():  void{
    this.apiDataService.getShops()
    .subscribe(shops => {
      this.shops = shops
    });
  }

  startShopping(shop_title): void{
    this.addShop(shop_title);

  }

  ngOnInit(): void {
    this.getShops();
  }

}
