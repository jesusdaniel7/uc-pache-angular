import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './landing-page/nav-menu/nav-menu.component';
import { CarouselComponent } from './landing-page/carousel/carousel.component';
import { TopComponent } from './top/top.component';
import { IndexComponent } from './index/index.component';
import { CollectionComponent } from './collection/collection.component';
import { TechnologyComponent } from './technology/technology.component';
import { ShoesComponent } from './shoes/shoes.component';
import { ProfileComponent } from './accounts/profile/profile.component';
import { LoginComponent } from './accounts/login/login.component';
import { RegisterComponent } from './accounts/register/register.component';
import { CartComponent } from './cart/cart.component';
import { ProductsListComponent } from './administration/products-list/products-list.component';
import { CreateComponent } from './administration/create/create.component';
import { FooterComponent } from './landing-page/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CarouselComponent,
    TopComponent,
    IndexComponent,
    CollectionComponent,
    TechnologyComponent,
    ShoesComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    ProductsListComponent,
    CreateComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
