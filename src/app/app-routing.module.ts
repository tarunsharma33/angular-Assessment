import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'anagram',
    loadChildren: () => import('./anagram/anagram.module').then(m => m.AnagramModule)
  },
  {
    path: 'temp-tracker',
    loadChildren: () => import('./temp-tracker/temp-tracker.module').then(m => m.TempTrackerModule)
  },
  {
    path: 'thanks',
    loadChildren: () => import('./thanks/thanks.module').then(m => m.ThanksModule)
  },
  { path: '**', redirectTo: 'register' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
