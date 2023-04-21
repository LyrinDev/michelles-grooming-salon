import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentsComponent } from './parents/parents.component';
import { PetsComponent } from './pets/pets.component';
import { ServicesOfferedComponent } from './services-offered/services-offered.component';
import { BillingComponent } from './billing/billing.component';
import { CheckInComponent } from './check-in/check-in.component';
import { ParentPortalComponent } from './parent-portal/parent-portal.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AuthComponent } from './auth/auth.component';
import { BusinessPortalComponent } from './business-portal/business-portal.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingEditComponent } from './shopping-cart/shopping-edit/shopping-edit.component';
import { PetDetailComponent } from './pets/pet-detail/pet-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { PetEditComponent } from './pets/pet-edit/pet-edit.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BreedsEditComponent } from './pets/breeds-edit/breeds-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentsComponent,
    PetsComponent,
    ServicesOfferedComponent,
    BillingComponent,
    CheckInComponent,
    ParentPortalComponent,
    HomeComponent,
    ShoppingCartComponent,
    AuthComponent,
    BusinessPortalComponent,
    HeaderComponent,
    ShoppingEditComponent,
    PetDetailComponent,
    SignupComponent,
    PetEditComponent,
    SpinnerComponent,
    BreedsEditComponent,

  ],

  imports: [
  RouterOutlet,
  CommonModule,
  ReactiveFormsModule,
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  FormsModule,
  RouterModule.forRoot([])
  
  ],
  exports: [SpinnerComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
