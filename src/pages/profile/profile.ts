import { RatingPage } from '../rating/rating';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions, InAppBrowserEvent } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public iab: InAppBrowser) {

  }

  open(){
    console.log('open');
    const options: InAppBrowserOptions = {
      hardwareback: "yes"
    }
    const browser = this.iab.create('facetime://ernestopimentel1@gmail.com', '_system', options);
    browser.on('loadstop').subscribe(event => {
      console.log('facetime')
   });
   this.navCtrl.push(RatingPage)
  }
}