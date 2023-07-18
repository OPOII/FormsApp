import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent {

  constructor(private fb:FormBuilder){}
  public myForm:FormGroup=this.fb.group({
    name: [''],
    price: [0],
    inStorage: [0],
  })

  onSave():void{
    console.log(this.myForm.value)
  }
  // public myForm: FormGroup=new FormGroup(
  //   {
  //     name: new FormControl('',[],[]),
  //     price: new FormControl(0),
  //     inStorage: new FormControl(0),
  //   }
  // )

}
