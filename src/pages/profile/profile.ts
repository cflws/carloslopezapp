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
    this.iab.create('facetime://greatisnate11@gmail.com', '_system', options).on('loadstart')
      .subscribe((event: InAppBrowserEvent) => {
        console.log('exit')
        console.log(event);
      })
  }
}