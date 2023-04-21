import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from './pets/pets.component';
import { AuthComponent} from './auth/auth.component'
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { PetEditComponent } from './pets/pet-edit/pet-edit.component';
import { BreedsEditComponent } from './pets/breeds-edit/breeds-edit.component';
import { BreedResolverService } from './pets/breeds-edit/breed-resolver.service';


const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'pets', component: PetsComponent,
runGuardsAndResolvers: "always", 
resolve: [BreedResolverService]},
{path: 'auth', component: AuthComponent},
{path: 'signup', component: SignupComponent},
{path: 'petEdit', 
component: PetEditComponent, 
runGuardsAndResolvers: "always", 
resolve: [BreedResolverService]},
{path: 'breedEdit', 
component: BreedsEditComponent, 
runGuardsAndResolvers: "always", 
resolve: [BreedResolverService]},
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule {}
