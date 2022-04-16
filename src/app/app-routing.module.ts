import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLaptopComponent } from './add-laptop/add-laptop.component';
import { LaptopListComponent } from './laptop-list/laptop-list.component';
import { UpdateLaptopComponent } from './update-laptop/update-laptop.component';


const routes: Routes = [
  {
      path:'updatelaptop', component:UpdateLaptopComponent
  },
  {
    path: 'laptoplist', component: LaptopListComponent
  },
  {
    path: 'add', component: AddLaptopComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
