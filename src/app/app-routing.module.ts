import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RootComponent } from './components/root/root.component';
import { AboutComponent } from './components/about/about.component';
import { MediaComponent } from './components/media/media.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PrivacyNoticeComponent } from './components/privacy-notice/privacy-notice.component';

const routes: Routes = [
  {path: '', component: RootComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'media', component: MediaComponent},
      {path: 'privacy', component: PrivacyNoticeComponent},
    ]
  },
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
