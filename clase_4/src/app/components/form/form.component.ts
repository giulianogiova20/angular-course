import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  loginForm: FormGroup

  constructor(){
    let regexEmail: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$';
    let controls: any = {
      email: new FormControl('', [Validators.required, Validators.pattern(regexEmail)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      rememberCredentials: new FormControl(true)
    }
    this.loginForm = new FormGroup(controls);
  }

  login(){
    console.log(this.loginForm);
    if(this.loginForm.controls['email'].errors?.['pattern']){
      console.log("Format error in email field");
    }

    if(this.loginForm.controls['email'].errors?.['required']){
      console.log("Email is mandatory");
    }
  }
}