import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
  
  form_data : any; branch_data : any; 
  csname : any; csmail : any; csphn : any; cspsw : any;
   

  ngOnInit() {
    this.form_data = JSON.parse(sessionStorage.getItem('frm_data'))

    console.log(this.form_data);
    this.branch_data = this.form_data.branch_form;
    this.csname = this.form_data.cusname;
    this.csmail = this.form_data.email;
    this.csphn = this.form_data.phn;
    this.cspsw = this.form_data.password;
    console.log(this.branch_data);

  }

}
