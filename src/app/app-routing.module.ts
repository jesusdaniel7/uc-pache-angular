import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  {path:'carrito', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
