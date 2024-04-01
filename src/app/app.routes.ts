import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodComponent } from './food/food.component';
import { AboutComponent } from './about/about.component';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    { path: 'food', 
    component: FoodComponent },
    { path: 'about', 
    component: AboutComponent },
];
