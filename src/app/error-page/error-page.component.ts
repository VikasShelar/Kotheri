import { Component, OnInit,Input } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  @Input() errorMsg:String;
  @Input() displayError:boolean;
  
  constructor() { 
   this.errorMsg="red";
  }

  ngOnInit() {
  }

}
