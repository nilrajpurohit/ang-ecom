import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//DEPENDENCIES
import {NgxTinySliderModule} from 'ngx-tiny-slider';

//COMPONENTS
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './page/auth/auth.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { BannerComponent } from './component/banner/banner.component';
import { SliderComponent } from './component/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxTinySliderModule
  ],
  exports: [
    NgxTinySliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
