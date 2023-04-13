import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SearchBarComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [
    NavComponent,
    SearchBarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
