import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


// component
import { AppComponent } from './app.component';
// import { Framecreatecomponent} from './frame/frame.component';
import { HomeComponent } from './home/home.component';
// import {  NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';


// import { HeaderComponent } from './component/header/header.component';


// const appRoute:Routes=[
// {path:'home',
// // pathMatch: 'full',
// component:HomeComponent
// },
// {path:'profile',

// component:ProfileComponent
// }

// ]



@NgModule({
  declarations: [
    AppComponent,
    // Framecreatecomponent,
    HomeComponent,
    // NavbarComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    // HeaderComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(appRoute),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
