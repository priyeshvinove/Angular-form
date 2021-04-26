import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkoutFrom:FormGroup //Step-3 : give same FormGroup name as in the template
  constructor(private formBuilder: FormBuilder) { // Building the form using formBuilder
      // this.checkoutFrom=formBuilder.group({
      //   emailAddr:new FormControl(),
      //   quantity:new FormControl(),
      //   terms:new FormControl(),

      // })
      this.checkoutFrom=formBuilder.group({
        emailAddr:['',[Validators.minLength(5),
                      Validators.required,
                      Validators.email]],
        quantity:['',Validators.required],
        terms:['',Validators.requiredTrue],

      })
  }
    valueChangeTracked='';
  ngOnInit(): void {

    // this.checkoutFrom.get('emailAddr').valueChanges.subscribe(data=>{
    //   console.log(data);
    //   this.valueChangeTracked=data
    // })

    this.checkoutFrom.valueChanges.subscribe(data=>{
      this.valueChangeTracked=data;
    })

    this.checkoutFrom.patchValue({
      emailAddr:'test@yopmail.com',
      quantity:10,
    })


    this.checkoutFrom.statusChanges.subscribe(fromState=>{
      console.log(fromState);
      
    })
  }
  postData(){
    console.log(this.checkoutFrom);
    console.log(this.checkoutFrom.value);
    console.log(this.checkoutFrom.value.emailAddr);
    
    this.resetForm();
  }
  resetForm(){
    this.checkoutFrom.reset();
  }
}
