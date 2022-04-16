import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {

  constructor(private laptopService: LaptopService, private router: Router) { }

  laptops = this.laptopService.getLaptops();

  ngOnInit(): void {
  }

  doUpdate(laptop: Laptop){
    this.laptopService.setLaptopToBeUpdated(laptop);
    this.router.navigateByUrl('updatelaptop');
  }


  doDelete(laptop: Laptop){
     this.laptopService.deleteKoro(laptop);
  }

}
