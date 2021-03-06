import { CreateCarFormComponent } from "./create-car-form/create-car-form.component";
import { CarsListComponent } from "./cars-list/cars-list.component";
import { CarDetailsComponent } from "./car-details/car-details.component";
import {AuthenticationGuard} from './../../core/guards/authentication/authentication.guard'
import { EditCarComponent } from "./edit-car/edit-car.component";
import { AdminGuard } from "../../core/guards/admin-guard/admin-guard";
import { DeleteCarComponent } from "./delete-car/delete-car.component";

export const carPaths = [
    { path: 'cars',  canActivate: [ AuthenticationGuard ], component: CarsListComponent},
    { path: 'create',  canActivate: [ AuthenticationGuard, AdminGuard ],  component: CreateCarFormComponent},
    { path: 'details/:id',  canActivate: [ AuthenticationGuard ],  component: CarDetailsComponent},
    { path: 'edit/:id',  canActivate: [ AuthenticationGuard, AdminGuard ],  component: EditCarComponent},
    { path: 'delete/:id',  canActivate: [ AuthenticationGuard, AdminGuard ],  component: DeleteCarComponent}
]