import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//DEPENDENCIES
import {NgxTinySliderModule} from 'ngx-tiny-slider';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

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
import { CategoryComponent } from './component/category/category.component';
import { ProductComponent } from './component/product/product.component';
import { AlertMsgComponent } from './component/alert-msg/alert-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    SliderComponent,
    CategoryComponent,
    ProductComponent,
    AlertMsgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxTinySliderModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NgxTinySliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
