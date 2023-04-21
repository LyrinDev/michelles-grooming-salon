import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PetService } from "../app-services/pets.service";
import { Pets } from "../models/pets.model";
import { map, tap} from 'rxjs/operators';
import { Breeds } from "../models/breed.model";

export interface Config {
  heroesUrl: string;
  textfile: string;
  date: any;
}

@Injectable({providedIn: 'root'})
export class DataStorageService{
    
    constructor(private http: HttpClient,
        private petService: PetService){}


  savePets() {
      const pets = this.petService.getPets();
      this.http.put('https://michelle-grooming-default-rtdb.firebaseio.com/pets.json', pets)
      .subscribe(response => {
          console.log(response);
      });
  }

  retrievePets(){
      return this.http.get<Pets[]>('https://michelle-grooming-default-rtdb.firebaseio.com/pets.json')
      .pipe(
          map(pet => {
            return pet.map(pet => {
              return {
                ...pet,
              };
            });
          }),
          tap(pet => {
            this.petService.setPets(pet);
          })
        );
      }


      retrieveBreeds() {
        return this.http
          .get<Breeds[]>(
            'https://michelle-grooming-default-rtdb.firebaseio.com/breeds.json'
          )
          .pipe(
        
            map(recipes => {
              console.log('made it into retrive breed method');
              if (Array.isArray(recipes))
              {
              return recipes.map(recipes => {
                return {
                  ...recipes                  
                };
              });
            } else {
          return []}}),
            tap(recipes => {
              this.petService.setBreeds(recipes);
            })
          );
      }

  saveBreeds<Breeds>() {
    const breeds = this.petService.getBreeds();
    this.http.put('https://michelle-grooming-default-rtdb.firebaseio.com/breeds.json', breeds)
    .subscribe(response => {
        console.log(response);
    });
  }   
}