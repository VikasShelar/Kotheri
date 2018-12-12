import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ErrorPageComponent} from './error-page/error-page.component'
import {SearchPipe} from './pipes/search.pipe'
import {OnlyAlphabets,OnlyNumbers} from './directives/custom.directive'
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NewComponent } from './new/new.component';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { DisplayComponent } from './display/display.component';
import { HomeComponent } from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ProfileComponent} from './profile/profile.component';
import {ContactComponent} from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    OnlyAlphabets,
    OnlyNumbers,
    SearchPipe,
    NewComponent,
    DisplayComponent,
    HomeComponent,
    AboutComponent,
    ProfileComponent,
    ContactComponent,
    SignupComponent
  ],
  imports: [
    
    BrowserModule,
   AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
