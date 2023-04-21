import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Subscription } from 'rxjs';
import { PetService } from 'src/app/app-services/pets.service';
import { Breeds } from 'src/app/models/breed.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';



@Component({
  selector: 'app-breeds-edit',
  templateUrl: './breeds-edit.component.html',
  styleUrls: ['./breeds-edit.component.css']
})
export class BreedsEditComponent implements OnInit {
  @ViewChild('breedForm', {static: false}) breedForm: NgForm;
  public id: number;
  breedList: Breeds[] = [];
  species: string[] = [
    ('Dog'),
    ('Cat')
  ]
  type: string;
  breedMod: string;
  selectedValue: any;
  typeOfPet: string;
  subscription: Subscription;

  constructor(private petServices: PetService,
    private dataStorage: DataStorageService){
     }

  ngOnInit(): void {
    
    // this.subscription = this.petServices.breedChanged
    // .subscribe((breeds: Breeds[]) => {
    //   this.breedList = breeds;
    //   console.log('inside subscribe on breed');
    // }
    // );

    this.breedList  = this.petServices.getBreeds();
    this.initForm();
  }

  initForm(){
    this.selectedValue = null;  
  }

  onSubmit(breedForm: NgForm){
   let newBreed = new Breeds(this.selectedValue, this.typeOfPet);
   this.breedList.push(newBreed);
   this.petServices.setBreeds(this.breedList);
   this.dataStorage.saveBreeds();
   breedForm.resetForm();
  }

  onChange(breedForm: NgForm){
    breedForm.reset();
    this.initForm();
  }

}
