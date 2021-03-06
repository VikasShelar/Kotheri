import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpclient:HttpClient) { }

public getDataFromServer(){
  return this.httpclient.get('http://jsonplaceholder.typicode.com/users').pipe(map((res:any)=>res))
}
}
