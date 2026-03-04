import { Routes } from '@angular/router';
import { Book } from './pages/book/book';
import { View } from './pages/view/view';
import { Shedule } from './pages/shedule/shedule';

export const routes: Routes = [

    {
        path:"",
        component:Book
    },
    {
        path:"view",
        component:View
    },
    {
        path:"shedule",
        component:Shedule
    }
  
];
