import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the RatingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rating',
  templateUrl: 'rating.html',
})
export class RatingPage {


  public activeStars = [
    false,
    false,
    false,
    false,
    false
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RatingPage');
  }

  activateStars(num) {
    if (num === 1) {
      this.activeStars = [true, false, false, false, false];
    } else if (num === 2) {
      this.activeStars = [true, true, false, false, false];
    } else if (num === 3) {
      this.activeStars = [true, true, true, false, false];
    } else if (num === 4) {
      this.activeStars = [true, true, true, true, false];
    } else if (num == 5) {
      this.activeStars = [true, true, true, true, true];
    }
  }


open(){
  
  this.navCtrl.popToRoot();
}
}