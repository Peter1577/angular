
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BluetoothsComponent } from './bluetooths/bluetooths.component';
import { BuletoothDetailsComponent } from './buletooth-details/buletooth-details.component';
import { FashionListComponent } from './fashion-list/fashion-list.component';
import { FashionComponent } from './fashion/fashion.component';
import { FormComponent } from './form/form.component';
import { HolidayComponent } from './holiday/holiday.component';
import { HomeComponent } from './home/home.component';
import { HotelComponent } from './hotel/hotel.component';
import { ItemsComponent } from './items/items.component';
import { JsonDataComponent } from './json-data/json-data.component';
import { LaptopDetailComponent } from './laptop-detail/laptop-detail.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MobileDetailsComponent } from './mobile-details/mobile-details.component';
import { MobileComponent } from './mobile/mobile.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { SkinDetailsComponent } from './skin-details/skin-details.component';
import { SkinsComponent } from './skins/skins.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VelichleDetailsComponent } from './velichle-details/velichle-details.component';

const routes: Routes = [
  {path :'home' , component : HomeComponent},
  {path :'about-us' , component : AboutUsComponent},
  {path :'items' , component : ItemsComponent,

  children:[
    {path:'hotel', component: HotelComponent},
    {path:'holiday', component:HolidayComponent},
  ]
},
  {path : 'product-list', component :ProductListComponent,

  children:[
            {path:'laptop' , component: LaptopsComponent},
            {path:'laptop/:id' , component :LaptopDetailComponent},
            {path:'bluetooth' , component: BluetoothsComponent},
            {path:'bluetooth/:id' , component:BuletoothDetailsComponent},
            {path :'skins', component :SkinsComponent},
            {path :'skins/:id', component :SkinDetailsComponent},
            {path:'fashion', component:FashionComponent},
            {path:'fashion/:id' , component:FashionListComponent},
            {path:'vehicle', component:VehicleComponent},
            {path:'mobile', component:MobileComponent},
            {path:'mobile/:model' , component:MobileDetailsComponent},
            {path:'vehicle/:id', component:VelichleDetailsComponent},
    ]},  
  {path : 'signin', component : FormComponent}, 
  {path : 'Login', component : LoginFormComponent},
  {path : 'signup', component : SignupComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'json data', component : JsonDataComponent}, 
  

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
