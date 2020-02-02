import { NgModule,Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyComponent } from './apply/apply.component';
import { AddressComponent } from './address/address.component';


const routes: Routes = [
  {path:'apply',component:ApplyComponent},
  {path:'address',component:AddressComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ApplyComponent]
