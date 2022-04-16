import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-add-laptop',
  templateUrl: './add-laptop.component.html',
  styleUrls: ['./add-laptop.component.css']
})
export class AddLaptopComponent implements OnInit {

  constructor(private laptopService : LaptopService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.laptopService.getLaptops());
  }
  newlaptop = new Laptop();



  addLaptop(){
    console.log(this.newlaptop);
    this.laptopService.addKoreDe(this.newlaptop);
    this.router.navigateByUrl('/add');
  }


}
