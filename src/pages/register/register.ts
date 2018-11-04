import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  
  @ViewChild('username') username;
  @ViewChild('password') password;
  @ViewChild('address') address;
  @ViewChild('zip') zip;

  constructor(private alertCtrl:AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


  alert(message: string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  register(){
    this.fire.auth.createUserWithEmailAndPassword(this.username.value, this.password.value)
    .then(data => {
      console.log('got data ', data);
      this.alert('Welcome to your new account!');
      this.navCtrl.setRoot(TabsPage);
    })
    .catch(error => {
      console.log('got an error', error);
      this.alert(error.message);
    })
    console.log("would register as ", this.username.value);
  }

}
