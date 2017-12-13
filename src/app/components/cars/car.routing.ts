import { CreateCarFormComponent } from "./create-car-form/create-car-form.component";
import { CarsListComponent } from "./cars-list/cars-list.component";
import { CarDetailsComponent } from "./car-details/car-details.component";
import {AuthenticationGuard} from './../../core/guards/authentication/authentication.guard'

export const carPaths = [
    { path: 'cars',  canActivate: [ AuthenticationGuard ], component: CarsListComponent},
    { path: 'create',  canActivate: [ AuthenticationGuard ],  component: CreateCarFormComponent},
    { path: 'details/:id',  canActivate: [ AuthenticationGuard ],  component: CarDetailsComponent}
]