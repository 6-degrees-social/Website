import { AboutSectionComponent } from './about-section/about-section.component';
import { CommunitySectionComponent } from './community-section/community-section.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'about', component: AboutSectionComponent},
  { path: 'community', component: CommunitySectionComponent},
  { path : '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64]
    })
  ],
  exports: [ RouterModule]
})
export class RoutingModule { }
