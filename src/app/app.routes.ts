import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'candidate-application', loadChildren: () => import('./candidate-application/candidate-application.module').then(m => m.CandidateApplicationModule) }
];
