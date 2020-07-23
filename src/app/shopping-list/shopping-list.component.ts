import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { ApiDataService } from '../api-data.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  data:{};
  products:any = [];
  shoppingList:any = [1];
  frequentItems:any;
  product_title:string = '';

  constructor(
    private apiDataService: ApiDataService,
    fb: FormBuilder,
    ) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }

  delShoplistItem(sli): void{
    this.data = {
      shopping_list_id:sli.ddc_shopping_list_id
    }
    this.apiDataService.delShoplistItem(this.data)
    .subscribe(shoppingList => {
      this.getProducts();
      this.getShoppinglist();
    });
  }

  getProducts():  void{
    this.apiDataService.getProducts()
    .subscribe(products => {
      this.frequentItems = products
    });
  }

  getShoppinglist():  void{
    this.apiDataService.getShoppinglist()
    .subscribe(shoppingList => {
      this.shoppingList = shoppingList
    });
  }

  addItemToList(product_title):  void{
    this.data = {
      product_title:product_title
    }
    this.apiDataService.addlistItem(this.data)
    .subscribe(shoppingList => {
      this.getProducts();
      this.getShoppinglist();
      this.product_title = '';
    });
  }

  ngOnInit(): void {
    this.getProducts();
    this.getShoppinglist();
  }

}
