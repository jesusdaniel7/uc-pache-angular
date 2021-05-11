import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './accounts/login/login.component';
import { RegisterComponent } from './accounts/register/register.component';
import { ProductsListComponent } from './administration/products-list/products-list.component';
import { CartComponent } from './cart/cart.component';
import { CollectionComponent } from './collection/collection.component';
import { IndexComponent } from './index/index.component';
import { ShoesComponent } from './shoes/shoes.component';
import { TechnologyComponent } from './technology/technology.component';
import { TopComponent } from './top/top.component';

const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'top', component:TopComponent},
  {path:'colecciones', component:CollectionComponent},
  {path:'zapatos', component:ShoesComponent},
  {path:'tecnologia', component:TechnologyComponent},
  {path:'carrito', component:CartComponent},
  {path:'productos/lista', component:ProductsListComponent},
  {path:'cuenta/inicio', component:LoginComponent},
  {path:'cuenta/registro', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
