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
import { AboutSection1Component } from '../../components/about/about-section1/about-section1.component';
import { AboutSection2Component } from '../../components/about/about-section2/about-section2.component';
import { AboutSection3Component } from '../../components/about/about-section3/about-section3.component';
import { MediaComponent } from '../../components/media/media.component';
import { SafeUrlPipe } from '../../safe-url.pipe';
import { YoutubeSketchComponent } from '../../components/media/youtube-sketch/youtube-sketch.component';
import { YoutubeWatercolorComponent } from '../../components/media/youtube-watercolor/youtube-watercolor.component';
import { YoutubeCraftsComponent } from '../../components/media/youtube-crafts/youtube-crafts.component';
import { YoutubeActivitiesComponent } from '../../components/media/youtube-activities/youtube-activities.component';
import { UnderConstructionComponent } from '../../components/shared/under-construction/under-construction.component';
import { PrivacyNoticeComponent } from '../../components/privacy-notice/privacy-notice.component';
import { PageNotFoundComponent } from '../../components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    HomeComponent,
    RootComponent,
    BaseNavComponent,
    AboutComponent,
    HomeSection1Component,
    HomeSection2Component,
    FooterComponent,
    ImageDialogComponent,
    AboutSection1Component,
    AboutSection2Component,
    AboutSection3Component,
    MediaComponent,
    SafeUrlPipe,
    YoutubeSketchComponent,
    YoutubeWatercolorComponent,
    YoutubeCraftsComponent,
    YoutubeActivitiesComponent,
    UnderConstructionComponent,
    PrivacyNoticeComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class ComponentsModule { }
