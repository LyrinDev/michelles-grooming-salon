import { Routes } from "@angular/router";
import { PetsComponent } from "./pets.component";

const routes: Routes = [
    {
        path: '',
        component: PetsComponent,
        canActivate: []
    }
] 