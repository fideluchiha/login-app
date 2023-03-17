import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  UserForm = new FormGroup({

    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(30)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.email
    ]),
    passwork: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),

  });


  constructor(private service: ServiceService, private router: Router) { }


  ngOnInit(): void {
  }

  Guardar() {

    if (this.UserForm.valid) {
      console.log('Form ->', this.UserForm.value);
      this.service.createUser(this.UserForm.value).subscribe((res: any) => {


        console.log(res.codigoRespuesta);
        if (res.codigoRespuesta == "0") {

          alert('se agrego');
          this.router.navigate(["login"]);

        } else {

          alert("Error " + res.mensaje);
        }

      },
        (error: any) => {
          console.log(error);
          console.log(error.Errors);

          console.log(error.Errors);
          alert(error.Errors);
        })
    } else {

      alert("Error revise el formulario datos no validos");
    }
  }



}
