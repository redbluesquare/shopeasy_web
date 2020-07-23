import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShopActivityComponent } from './shop-activity/shop-activity.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:'shopping-list', component:ShoppingListComponent},
  {path:'shop-activity', component:ShopActivityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
