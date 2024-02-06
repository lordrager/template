import { Component, ContentChild, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  checkUser() {
    console.log('You must make request to the DB');
  }

  password: string = '';
  email: string = '';
  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  ButtonControll() {
    if(this.password.length<=20 && this.password.length>=8 && this.password!==undefined &&
      this.email.length<=30 && this.email.length>=10 && this.email.includes('@'))
      return true;
    else
      return false;
  }


  constructor() { }

  ngOnInit() {
  }

}
