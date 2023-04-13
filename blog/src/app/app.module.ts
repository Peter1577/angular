import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { FormComponent } from './form/form.component';
import { BluetoothsComponent } from './bluetooths/bluetooths.component';
import { LaptopDetailComponent } from './laptop-detail/laptop-detail.component';
import { BuletoothDetailsComponent } from './buletooth-details/buletooth-details.component';
import { SkinsComponent } from './skins/skins.component';
import { SkinDetailsComponent } from './skin-details/skin-details.component';
import { FashionComponent } from './fashion/fashion.component';
import { FashionListComponent } from './fashion-list/fashion-list.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VelichleDetailsComponent } from './velichle-details/velichle-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { MobileComponent } from './mobile/mobile.component';
import { MobileDetailsComponent } from './mobile-details/mobile-details.component';
import { ItemsComponent } from './items/items.component';
import { HotelComponent } from './hotel/hotel.component';
import { HolidayComponent } from './holiday/holiday.component';
import { JsonDataComponent } from './json-data/json-data.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutUsComponent,
    ProductListComponent,
    LaptopsComponent,
    FormComponent,
    BluetoothsComponent,
    LaptopDetailComponent,
    BuletoothDetailsComponent,
    SkinsComponent,
    SkinDetailsComponent,
    FashionComponent,
    FashionListComponent,
    VehicleComponent,
    VelichleDetailsComponent,
    LoginFormComponent,
    SignupComponent,
    RegisterComponent,
    FooterComponent,
    MobileComponent,
    MobileDetailsComponent,
    ItemsComponent,
    HotelComponent,
    HolidayComponent,
    JsonDataComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
