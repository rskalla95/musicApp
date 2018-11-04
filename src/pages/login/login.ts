import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from '@angular/fire/auth';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild ('username') username;
  @ViewChild ('password') password;

  constructor(private alertCtrl:AlertController, private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  signIn(){
    this.fire.auth.signInWithEmailAndPassword(this.username.value, this.password.value)
    .then( data => {
      console.log('got some data ', this.fire.auth.currentUser);
      this.alert('Succes! You are logged in')
      this.navCtrl.setRoot(TabsPage)
      //user is logged in
    })
    .catch( error => {
      console.log('got an error ', error);
      this.alert(error.message)
    })
    console.log("Signed in.");
  }

  register(){
    this.navCtrl.push(RegisterPage)
  }

}
