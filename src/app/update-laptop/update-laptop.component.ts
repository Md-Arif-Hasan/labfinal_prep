import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-update-laptop',
  templateUrl: './update-laptop.component.html',
  styleUrls: ['./update-laptop.component.css']
})
export class UpdateLaptopComponent implements OnInit {

  constructor(private laptopService: LaptopService, private router: Router ) {}

  pickedLaptop = this.laptopService.getLaptopToBeUpdated();

  ngOnInit(): void {
  }



submitKoro(){
  this.laptopService.updateKoro(this.pickedLaptop);
  this.router.navigateByUrl('laptoplist');
}


}
