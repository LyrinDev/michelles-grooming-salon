import {  Component, ElementRef, OnInit, ViewChild, ɵɵsetComponentScope } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PetService } from 'src/app/app-services/pets.service';
import { Breeds } from 'src/app/models/breed.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { SelectValidatorBreed} from './select-validator-breed';
import { SelectValidatorSpecies } from './select-validator-species';




@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {
  @ViewChild("redLabel", { static: true }) missingRabies: ElementRef;

  petForm: FormGroup;
  breedListSorted: Breeds[] =[];
  breedForm: FormGroup;
  hasRabiesInfo:boolean;
  breedList: Breeds[] = [];
  selectedValue: string | null;
  sortedSpeciesList: string[] = [];
  sortedBreedList: string[] = [];
  

  constructor(private petService: PetService,
    private datastorage: DataStorageService) { }


   ngOnInit():void{

    this.missingRabies.nativeElement.classList.add('text-danger');

    this.breedList  = this.petService.getBreeds();
  
    this.petForm = new FormGroup({
      firstName: new FormControl({value: null, disabled: false}, Validators.required),
      lastName: new FormControl({value: null, disabled: false}, Validators.required),
      imagePath: new FormControl({value: null, disabled: false}, Validators.required),
      hasRabies: new FormControl({value: false, disabled: false}),
      breedGroup: new FormGroup({
        species: new FormControl({value: null, disabled: false}, SelectValidatorSpecies),
        breed: new FormControl({value: null, disabled: true}, SelectValidatorBreed)
         })
    });

  console.log('before breed set ' + this.breedList)
  this.breedList = this.petService.getBreeds();
  console.log('after breed list ' + this.breedList)
    console.log('breedlist' + this.breedList);
  this.breedList.forEach(item => {
    console.log('inside breed list');
    if(!this.sortedSpeciesList.includes('Cat')){
    this.sortedSpeciesList.push(item.species);
    } else if (!this.sortedSpeciesList.includes('Dog')) {
      this.sortedSpeciesList.push(item.species);
    }})
}
 
initForm() {
  this.selectedValue = '';
}
  
onSubmit(){
  console.log(this.petForm.value);
  this.petService.addPets(this.petForm.value);
  this.datastorage.savePets();
  this.cancel();
}

toggleRed(){
  this.hasRabiesInfo = !this.hasRabiesInfo;

  if (!this.hasRabiesInfo){
    this.missingRabies.nativeElement.classList.add('text-danger');
  } else {
    this.missingRabies.nativeElement.classList.remove('text-danger');
  }
}

onChange(event: Event){
  this.breedList.forEach(item => {
    if(this.selectedValue === 'Cat' && item.species === 'Cat'){
    this.sortedBreedList.push(item.breed);
    console.log('inside breed for cat')
    } else if (this.selectedValue === 'Dog' && item.species === 'Dog') {
      this.sortedBreedList.push(item.breed);
      console.log('inside breed for dog')
    } else {
      this.sortedBreedList.push(item.breed)
      console.log('inside breeds list else')
    }
  })

 this.initForm();
}

onBreedChange(){
  console.log(this.petForm.get('breedGroup.breed')?.value);

}

onSpeciesChange() {
  console.log('hit onspecieschanged')
  var e = (document.getElementById("species")) as HTMLSelectElement;
  var sel = e.selectedIndex;
  var opt = e.options[sel];
  var CurValue = (opt).value;
  let breedSelect = document.getElementById('breed') as HTMLSelectElement;

   breedSelect.value = "null";
   if(CurValue.includes('Cat') || CurValue.includes('Dog'))
    {
      breedSelect.disabled = false;
   }
    else {
      breedSelect.value = "null";
      breedSelect.disabled = true;
    }

    this.sortedBreedList = [];
        
    this.breedList.forEach(item => {
    if(item){
      if(CurValue.includes('Cat') && item.species === 'Cat'){
        this.sortedBreedList.push(item.breed);
      } else if (CurValue.includes('Dog') && item.species === 'Dog') {
        this.sortedBreedList.push(item.breed);
      } else if (CurValue.includes('null') && item.species === 'null'){
      this.sortedBreedList.push(item.breed)
    }
  }
  })
}

cancel(){

    console.log(this.petForm);
    this.petForm.reset();
  }    
}