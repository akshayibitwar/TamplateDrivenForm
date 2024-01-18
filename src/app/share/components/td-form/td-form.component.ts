import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {
  @ViewChild('SignIn') SignIn!: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  onSignIn(){
      console.log(this.SignIn);
      
  }
}
