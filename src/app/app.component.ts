import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TamplateDrivenForm';
@ViewChild("SignInForm") SignInForm ! : NgForm;
secretquestionDefault : string = 'favbook';
modeofContact = [
  {moc : "byemail", id : 123},
  {moc : "byphone", id : 124},
];
//   onSignUp(SignUpForm:NgForm){
//       if(SignUpForm.valid){
//         console.log(SignUpForm.value);
//         SignUpForm.reset()
//       }
//   }
//     ======================OR
obj = 
  {
    "userInfo": {
        "UserName": "akkiak123",
        "Email": "asaa"
    },
    "secretquestion": "favteacher",
    "answer": "jadhav",
    "subscribToEmail": true,
    "Contactmode": "byemail"
}



onSignUp(){
    if(this.SignInForm.valid){
      console.log(this.SignInForm.value);
    this.SignInForm.reset();
    }
  }

  onEditInfo(){
      //this.SignInForm.form.patchValue(this.obj);
      this.SignInForm.form.setValue(this.obj);
  }
}
