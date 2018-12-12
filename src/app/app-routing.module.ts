import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewComponent} from './new/new.component'
import {DisplayComponent} from './display/display.component'
import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import {ProfileComponent} from './profile/profile.component'
import {ContactComponent} from './contact/contact.component'
import {SignupComponent} from './signup/signup.component';


const routes: Routes = [
 { path:'',component:DisplayComponent},
 { path:'new',component:NewComponent},
 { path:'signup',component:SignupComponent},
 { path:'home',component:HomeComponent},
 { path:'about',component:AboutComponent},
 { path:'profile',component:ProfileComponent},
 { path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
