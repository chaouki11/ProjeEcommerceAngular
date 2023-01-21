import { Component } from '@angular/core';
import { NgForm,FormGroup,Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private root : Router){

  }

  userform = new FormGroup(
    {
      username : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required)

    }

  );
  onsubmit(){
    console.log(this.userform.get("password")?.value)
    if(this.userform.get("username")?.value!="" && this.userform.get("password")?.value!=""){
      console.log("onsubmit")
          this.root.navigate(["products"])
          alert("l'achat a réussi !");
    }
    else{
      alert(" enter n'importe quoi");
    }
  }


}
