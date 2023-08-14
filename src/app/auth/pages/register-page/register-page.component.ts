import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValitadorsService } from 'src/app/shared/service/validators.service';
import * as customValidators from 'src/app/shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

  public myForm: FormGroup=this.fb.group({
    name: ['',[Validators.required,Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
    email: ['',[Validators.required,Validators.pattern(this.validatorsService.emailPattern)]],
    username: ['',[Validators.required, this.validatorsService.cantBeStrider]],
    password: ['',[Validators.required,Validators.minLength(6)]],
    password2: ['',[Validators.required,Validators.minLength(6)]],
  })

  constructor(
    private fb: FormBuilder,
    private validatorsService:ValitadorsService){}

  isValidField(field:string){
    return this.validatorsService.isValidField(this.myForm,field);
  }
  onSubmit(){
    this.myForm.markAllAsTouched();
  }
}
