import { Component } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor( private registerservice:RegisterService, private fb:FormBuilder){}

  registerSellerForm!: FormGroup; 

  ngOnitInit()
  {
    this.registerSellerForm=this.fb.group({
      name:[null,Validators.required],
      email:[null,[Validators.required,Validators.email]],
      cname:[null,Validators.required],
      GSTINNumber:[null,Validators.required],
      password:[null,Validators.required],
      address:[null,Validators.required],
      phoneNumber:[null,Validators.required]
   })
  }

  registerseller()
  {
    console.log(this.registerSellerForm?.value)
    //this.registerservice.registerseller().subscribe((res)=>{
     // console.log(res);

  //  })
  }
  

}
