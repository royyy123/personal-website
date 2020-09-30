import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { Framecreatecomponent} from './frame/frame.component';
import { HomeComponent } from './home/home.component';
import {  NavbarComponent } from './navbar/navbar.component';


const appRoute:Routes=[
{path:'products',component:Framecreatecomponent},
{path:'home',component:HomeComponent}

]



@NgModule({
  declarations: [
    AppComponent,
    Framecreatecomponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
