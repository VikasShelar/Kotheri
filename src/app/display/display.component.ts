
import { Component, OnInit,Input} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
 
  data;
  constructor(private route:ActivatedRoute, private router : Router) {
    this.data=this.route.snapshot.queryParams.lensId;
    console.log("router val",this.data);
   }

   goToLogin(){
    this.router.navigate(['new'])
    
   }
   goToSignUp(){
    this.router.navigate(['signup'])
    
   }

   goToHome(){
    this.router.navigate(['home'])
   }
   goToAbout(){
    this.router.navigate(['about'])
   }
   goToProfile(){
    this.router.navigate(['profile'])
   }
   goToContact(){
    this.router.navigate(['contact'])
   }
  ngOnInit() {
  }
  

}
