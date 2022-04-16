import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaptopListComponent } from './laptop-list/laptop-list.component';
import { UpdateLaptopComponent } from './update-laptop/update-laptop.component';

import { FormsModule } from '@angular/forms';
import { AddLaptopComponent } from './add-laptop/add-laptop.component';

@NgModule({
  declarations: [
    AppComponent,
    LaptopListComponent,
    UpdateLaptopComponent,
    AddLaptopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
