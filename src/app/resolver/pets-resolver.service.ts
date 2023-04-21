import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { PetService } from '../app-services/pets.service';
import { Breeds } from '../models/breed.model';


import { DataStorageService } from '../shared/data-storage.service';


@Injectable({ providedIn: 'root' })
export class BreedResolverService implements Resolve<Breeds[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private petService: PetService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const breed = this.petService.getBreeds();
    if (breed.length === 0) {
      console.log('species non zero ' + breed);
      return this.dataStorageService.retrieveBreeds();
    } else {
      console.log('species zero' + breed);
      return breed;
    }
  }
}
