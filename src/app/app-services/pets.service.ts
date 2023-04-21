import { Injectable } from "@angular/core";
import { Subject } from "rxjs/internal/Subject";
import { Breeds } from "../models/breed.model";
import { Pets } from "../models/pets.model";

@Injectable({providedIn:'root'})
export class PetService{
    petChanged = new Subject<Pets[]>();
    private pets: Pets[] =[];

    breedChanged = new Subject<Breeds[]>();
    private breeds: Breeds[] = [];

    constructor(){}

    setPets(pets: Pets[]){
         this.pets = pets;
         this.petChanged.next(this.pets.slice());
    }

    getPets(){
        return this.pets.slice();
    }

    addPets(addpets: Pets){
        this.pets.push(addpets);
        this.petChanged.next(this.pets.slice())
    }

    setBreeds(breed: Breeds[]){
        this.breeds = breed;
        this.breedChanged.next(this.breeds.slice());
    }

    addBreeds(breeds: Breeds){
        this.breeds.push(breeds);
        this.breedChanged.next(this.breeds.slice());
    }

    getBreeds(){
       return this.breeds.slice();
    }
}