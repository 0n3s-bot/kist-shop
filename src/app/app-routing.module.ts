import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

const routes: Routes = [
        { path: '', component: HomeComponent },
        { path: 'shop', component: ShopComponent },
        { path: 'about', component: AboutComponent },
        { path: 'contact', component: ContactComponent },
        { path: 'home', component: HomeComponent },
        { path: 'productdetail/:id', component: ProductdetailComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}