import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  FileUpload:any;
  getData1:any;

  constructor(private httpClient:HttpClient) { }

  postData(value){
   return this.httpClient.post('https://5d36889b86300e0014b643bb.mockapi.io/api/v1/FileUpload',value).toPromise()
   .then((data)=>{
     resolve(data)
   })
  }
  getData(){
    return this.httpClient.get('https://5d36889b86300e0014b643bb.mockapi.io/api/v1/FileUpload')
    .pipe(map(data=>this.getData1=data))
  }
  del(value){
    return this.httpClient.delete('https://5d36889b86300e0014b643bb.mockapi.io/api/v1/FileUpload/'+value)
    .pipe(map(data=>this.getData1=data))
  }
}
