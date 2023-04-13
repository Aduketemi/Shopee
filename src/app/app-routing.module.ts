import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: { title: "Home Page" },
  },
  {
    path: "details",
    component: ProductDetailsComponent,
    data: { title: "Product Page" },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
