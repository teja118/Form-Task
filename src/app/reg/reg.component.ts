import { Component, OnInit } from '@angular/core';
import {  FormControl, FormBuilder, FormGroup, FormArray, Validators, ValidatorFn, AbstractControl  } from '@angular/forms';
import { ConfirmedValidator } from './validator';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})


export class RegComponent implements OnInit {

  
  loginForm: FormGroup; 

  constructor(private formBuilder: FormBuilder, private fb: FormBuilder) { }
firstname : ""; email : ""; phone : ""; psw : ""; lgIn : any;
submitted = false;


business = [{ bsn: "Marketing" }, { bsn: "IT" }, { bsn: "BPO" }, { bsn: 'Sales' }, { bsn: 'Electronics' }] 

ngOnInit() {

  

 this.loginForm = this.formBuilder.group({
    cusname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phn: ['', [Validators.required, Validators.minLength(10)]],
     password: ['', [Validators.required, Validators.minLength(6)]],
     cnfrmpsw: ['', [Validators.required]],

      branch_form: this.formBuilder.array([
       this.addBranchForm()
    ])
  },
  { 
    validator: ConfirmedValidator('password', 'cnfrmpsw')
  });
  
}


addBranchForm() : FormGroup {
  return this.fb.group({
    brname: ['', [Validators.required]],
    bremail: ['', [Validators.required, Validators.email]],
    brphn: ['', [Validators.required, Validators.minLength(10)]],
    city: ['', [Validators.required]],
    adrs: ['', [Validators.required]],
    type: ['', [Validators.required]],
    acceptTerms: ['', [Validators.required]]
  })
}

get branch_form() {
  return this.loginForm.get('branch_form') as FormArray;
}

onChange(bsn: string, isChecked: boolean) {
  const branch_form = <FormArray>this.loginForm.controls.acceptTerms;

  if (isChecked) {
    branch_form.push(new FormControl(bsn));
  } else {
    let index = branch_form.controls.findIndex(x => x.value == bsn)
    branch_form.removeAt(index);
  }
}


addSellingPoint() : void {
 this.branch_form.push(this.addBranchForm());
}

get f() { return this.loginForm.controls; }


onSubmit(value) {

  this.submitted = true;
  if (this.loginForm.valid) {

    console.log(value);

    sessionStorage.setItem('frm_data', JSON.stringify(value));
     window.location.href ="/list"; 
  }else{
    
  }

}

}

