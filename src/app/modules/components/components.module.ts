import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../components/home/home.component';
import { RootComponent } from '../../components/root/root.component';
import { RouterModule } from '@angular/router';
import { BaseNavComponent } from '../../components/base-nav/base-nav.component';
import { AboutComponent } from '../../components/about/about.component';
import { HomeSection1Component } from '../../components/home/home-section1/home-section1.component';
import { HomeSection2Component } from '../../components/home/home-section2/home-section2.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ImageDialogComponent } from '../../components/shared/image-dialog/image-dialog.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    HomeComponent,
    RootComponent,
    BaseNavComponent,
    AboutComponent,
    HomeSection1Component,
    HomeSection2Component,
    FooterComponent,
    ImageDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class ComponentsModule { }
