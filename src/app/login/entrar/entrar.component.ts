import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.scss']
})
export class EntrarComponent implements OnInit{
  ngOnInit(): void {
   
  }

  LoginForm=  new FormGroup({

    email: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.email
    
    ]),
    passwork: new FormControl('',[
      Validators.required,
      Validators.minLength(4)    
    ]),
    
  });

  constructor(private service:ServiceService ,private router:Router){} 


  Login(){

    if(this.LoginForm.valid){

    console.log('Form ->',this.LoginForm.value);
    this.service.loginUser(this.LoginForm.value).subscribe((res:any)=>{

     
      console.log(res.codigoRespuesta);
      if (res.codigoRespuesta=="0"){

        this.router.navigate(["home"]);
        localStorage.setItem("user", res.name)

      }else{

        alert("Error "+res.mensaje);
      }
     
    },
    (error:any) => {
        console.log(error);
        console.log(error.Errors);
        
        console.log(error.Errors);
        alert( error.Errors );
    })
}else{

  alert("Error revise el formulario datos no validos");
}
}

}
