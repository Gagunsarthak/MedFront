import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: 'profile',
    loadChildren: () => import('../routes/app-profile/app-profile.module').then(m => m.AppProfileModule)
  },
  {
    path: 'signUp',
    loadChildren: () => import('../routes/app-signup/app-signup.module').then(m => m.AppSignupModule)
  },
  {
    path: 'search',
    loadChildren: () => import('../routes/app-search/app-search.module').then(m => m.AppSearchModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling:'enabled',
    scrollPositionRestoration:'top',
    urlUpdateStrategy:'eager',
    relativeLinkResolution:'legacy'

  })],
  exports: [RouterModule],
  
})
export class AppRoutingModule {
  
 }
