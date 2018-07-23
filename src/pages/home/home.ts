import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public activeStars = [ false, false, false, false, false];
  constructor(public navCtrl: NavController) {

  }

  openPage(){
    this.navCtrl.push(ProfilePage);
  }

  activateStars(num){
    if(num === 1){
      this.activeStars = [ true, false, false, false, false];
    } else  if(num === 2){
      this.activeStars = [ true, true, false, false, false];
    }else   if(num === 3){
      this.activeStars = [ true, true, true, false, false];
    }else  if(num === 4){
      this.activeStars = [ true, true, true, true, false];
    }else  if(num == 5){
      this.activeStars = [ true, true, true, true, true];
    }
  }

}
