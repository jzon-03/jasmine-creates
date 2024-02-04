import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RootComponent } from './components/root/root.component';
import { AboutComponent } from './components/about/about.component';
import { MediaComponent } from './components/media/media.component';

const routes: Routes = [
  {path: '', component: RootComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'media', component: MediaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
