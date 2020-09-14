import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetalhesComponent } from './detalhes/detalhes.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'detalhes/:id', component: DetalhesComponent },
   

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);