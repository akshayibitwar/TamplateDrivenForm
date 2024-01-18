import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactivform',
  templateUrl: './reactivform.component.html',
  styleUrls: ['./reactivform.component.scss']
})
export class ReactivformComponent implements OnInit {
SignIn !: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.SignIn = new FormGroup({
      email : new FormControl(null),
      username : new FormControl(null)
    })
  }

  onSignIn(){
    console.log(this.SignIn.value);
    this.SignIn.reset();
  }

}
