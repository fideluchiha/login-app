import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  User:User[]| undefined;
  dato= localStorage.getItem('user') ;
  constructor(private service:ServiceService ,private router:Router){ }

  ngOnInit(): void {
    


    if(this.dato==null){

      this.router.navigate(["login"]);

    }
    
   
    this.service.getUser().subscribe((resp: any) =>{
      console.log(resp)
      this.User= resp
   })
  }

  exit(){

    localStorage.clear();
    this.router.navigate(["login"]);

  }


}
