import { Injectable } from '@angular/core';
import { Laptop } from './laptop';

@Injectable({
  providedIn: 'root'
})

export class LaptopService {

  constructor() { }

  private laptops: Laptop[] =[
    {
       id: 1,
       name: 'LG'
    },
    {
          id:2,
          name: 'Core i5'
    },

    {
          id: 3,
          name: 'Shera Laptop'
    }
]

getLaptops(): Laptop[]{
   return this.laptops;
}

laptopToBeUpdated !: Laptop;

setLaptopToBeUpdated(laptop: Laptop): void
{
    this.laptopToBeUpdated = laptop;
}

getLaptopToBeUpdated(): Laptop{
  return this.laptopToBeUpdated;
}

updateKoro(laptop: Laptop){
    this.laptops.forEach((value, index) =>{
        if(value==laptop){
          this.laptops.splice(index,1,laptop)
        }

    })
}

laptoptobeToBeadded !: Laptop;

deleteKoro(laptop: Laptop){
  this.laptops.forEach((value, index) =>{
    if(value == laptop){
        this.laptops.splice(index, 1);
    } 
  })
}

getLaptopToBeadded(): Laptop{
    return this.laptoptobeToBeadded;
}


addKoreDe( newlap : Laptop){
  let laps = this.laptops.length;
  newlap.id = laps+1;
  this.laptops.splice(laps,0, newlap);
}


}
