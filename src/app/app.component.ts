import { Component } from '@angular/core';
import {  FormControl, FormBuilder, FormGroup, FormArray, Validators, ValidatorFn, AbstractControl  } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent  {
// loginForm: FormGroup;

// constructor(private formBuilder: FormBuilder, private fb: FormBuilder) { }
// firstname : ""; email : ""; phone : ""; psw : ""; lgIn : any;
// submitted = false;



ngOnInit() {

//  this.loginForm = this.formBuilder.group({
//     cusname: ['', [Validators.required]],
//     email: ['', [Validators.required, Validators.email]],
//     phn: ['', [Validators.required]],
//      password: ['', [Validators.required, Validators.minLength(6)]],
//      cnfrmpsw: ['', [Validators.required]],
//     //  brname: ['', [Validators.required]],
//     //  bremail: ['', [Validators.required, Validators.email]],
//     //  brphn: ['', [Validators.required]],
//     //  city: ['', [Validators.required]],
//     //  adrs: ['', [Validators.required]],

//      branch_form: this.formBuilder.array([
//        this.addBranchForm()
//     ])
//   });
  
// }


// addBranchForm() : FormGroup {
//   return this.fb.group({
//     brname: ['', [Validators.required]],
//     bremail: ['', [Validators.required, Validators.email]],
//     brphn: ['', [Validators.required]],
//     city: ['', [Validators.required]],
//     adrs: ['', [Validators.required]]
//   })
// }

// get branch_form() {
//   return this.loginForm.get('branch_form') as FormArray;
// }



// addSellingPoint() : void {
//  this.branch_form.push(this.addBranchForm());
//   // (<FormArray>this.loginForm.get('branch_form')).push(this.addBranchForm());
// }

// get f() { return this.loginForm.controls; }


// onSubmit(value) {

//   this.submitted = true;
//   if (this.loginForm.valid) {

//     console.log(value);

//     localStorage.setItem('frm_data',value )

//   }else{
    
//   }

// }
}
}
