import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  showArr = [];
  releaseGetData;
  constructor(private profileservice: ProfileService) { }

  ngOnDestroy(){
    this.releaseGetData.unsubscribe();
  }

  ngOnInit() {
    this.releaseGetData = this.profileservice.getDataFromServer().subscribe(Response => {
      if (Response && Response != null && Response != undefined) {
        for (var i = 0; i < Response.length; i++) {
          this.showArr.push(Response[i]);
        }
      }

    })
  }



}
