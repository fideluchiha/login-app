import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  url='http://127.0.0.1:8080/api/usuarios'


  getUser(){

    let header = new HttpHeaders().set('Content-Type','application/json')
    return this.http.get<User[]>(this.url,{
      headers: header
    });
  }

  createUser(form:any){

    
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
      
    });
    return this.http.post(this.url+"/save",form,{
    headers: header
  });
}


loginUser(form:any){

    
  let header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    
  });
  return this.http.post(this.url+"/login",form,{
  headers: header
});
}


}
