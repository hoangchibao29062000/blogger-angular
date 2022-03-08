import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private httpClient: HttpClient|any;
  private API_SERVER:string = "https://gorest.co.in";
  private header:HttpHeaders |any;
  constructor(private injectable:Injector) { 
    if(this.injectable){
      this.httpClient = this.injectable.get(HttpClient);
      this.header = new HttpHeaders().set('content-type','application/json');
      this.header = this.header.set('Authorization','Bearer 05d088d060fce7561fdd32eb682d07245165159a4ecb6c68f3fc13bf7e2930e3')
    }
  }

  public get(path:string="",param:any){
    return new Promise((resolve,reject) =>{
      try{
        this.httpClient.get(this.API_SERVER+path,{params:param})
        .subscribe((data:any) =>{
          resolve(data);
          console.log(data);
        })
        
        
      }
      catch(err){
        reject(err);
      }
    })
  }

  public post(path:string="",body:any){
    return new Promise((resolve,reject) =>{
      try{
        this.httpClient.post(this.API_SERVER+path,body,{headers:this.header})
        .subscribe((data:any) =>{
          resolve(data);
        })
      }
      catch(err){
        console.log(body);
        
        reject(err);
      }
    })
  }
  public delete(path:string=""){
    return new Promise((resolve,reject) =>{
      try{
        this.httpClient.delete(this.API_SERVER+path,{headers:this.header})
        .subscribe((data:any) =>{
          resolve(data);
        })
      }
      catch(err){
        reject(err);
      }
    })
  }
}
