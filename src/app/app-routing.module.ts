import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RootComponent } from './components/root/root.component';
import { AboutComponent } from './components/about/about.component';
import { MediaComponent } from './components/media/media.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PrivacyNoticeComponent } from './components/privacy-notice/privacy-notice.component';
import { TotalEclipseComponent } from './components/events/total-eclipse/total-eclipse.component';
import { NASAComponent } from './components/n-a-s-a/n-a-s-a.component';
import { PictureOfTheDayComponent } from './components/n-a-s-a/picture-of-the-day/picture-of-the-day.component';
import { Random6AstronomyComponent } from './components/n-a-s-a/random-6-astronomy/random-6-astronomy.component';

const routes: Routes = [
  {path: '', component: RootComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'media', component: MediaComponent},
      {path: 'privacy', component: PrivacyNoticeComponent},
      {path: 'eclipse', component: TotalEclipseComponent},
      {
        path: 'nasa', 
        component: NASAComponent,
        children: [
          {path: '', redirectTo: 'apod', pathMatch: 'full'},
          {path: 'apod', component: PictureOfTheDayComponent},
          {path: 'random', component: Random6AstronomyComponent},
        ]      
      }
    ]
  },
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
