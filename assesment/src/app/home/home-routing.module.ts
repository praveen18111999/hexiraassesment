import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductListComponent } from './components/productlist/productlist.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [{
  path: '', component: HomeComponent,
  children: [{ path: 'homepage', component: HomepageComponent },
  { path: 'product/:id', component: ProductListComponent },
  {path:'header',component:HeaderComponent}


  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
