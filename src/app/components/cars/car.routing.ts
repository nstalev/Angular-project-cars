import { CreateCarFormComponent } from "./create-car-form/create-car-form.component";
import { CarsListComponent } from "./cars-list/cars-list.component";
import { CarDetailsComponent } from "./car-details/car-details.component";

export const carPaths = [
    { path: 'cars',  component: CarsListComponent},
    { path: 'create',  component: CreateCarFormComponent},
    { path: 'details/:id',  component: CarDetailsComponent}
]