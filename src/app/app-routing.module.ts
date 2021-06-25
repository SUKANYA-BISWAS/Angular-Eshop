import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditemsinbasketComponent } from './additemsinbasket/additemsinbasket.component';
import { CreateorderComponent } from './createorder/createorder.component';
import { ViewitemsbycustComponent } from './viewitemsbycust/viewitemsbycust.component';
import { ViewproductsbycategorynameComponent } from './viewproductsbycategoryname/viewproductsbycategoryname.component';
import { ViewproductsbyproductIdComponent } from './viewproductsbyproduct-id/viewproductsbyproduct-id.component';

const routes: Routes = [{path:"viewbycategoryname/viewbycategoryname/additemsinbasket/:prodid", component:AdditemsinbasketComponent},
                        {path:"getitemsbycustid", component:ViewitemsbycustComponent},
                        {path:'viewbycategoryname',component:ViewproductsbycategorynameComponent},
                        {path:'viewbyproductId',component:ViewproductsbyproductIdComponent},
                        {path:'getitemsbycustid/createorder/:custid',component:CreateorderComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// viewbycategoryname/viewbycategoryname/additemsinbasket/63