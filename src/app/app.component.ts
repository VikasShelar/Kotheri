import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
user;
Password;
test;
  title = 'VikasApp';
  constructor(private router:Router){
     }

  goToLogin(){
    this.router.navigate(['new'],{queryParams:{lensId:'8'}});
     }
     ngOnInit(){

     }
}
