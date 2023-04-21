import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { PetService } from "src/app/app-services/pets.service";
import { Breeds } from "src/app/models/breed.model";
import { DataStorageService } from "src/app/shared/data-storage.service";

@Injectable({ providedIn: 'root'})
export class BreedResolverService implements Resolve<Breeds[]> {

    constructor(private dataStorage: DataStorageService,
        private petService: PetService ){}

    resolve(){
        const breed = this.petService.getBreeds();

        if(breed.length === 0){
            return this.dataStorage.retrieveBreeds();
        } else {
            console.log(breed)
           return breed;
        }
    }
}