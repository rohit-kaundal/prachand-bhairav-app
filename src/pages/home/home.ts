import { PanchangPage } from './../panchang/panchang';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    // was testing VS code intellisense feature, its awsome  
    // this.navCtrl.push(PanchangPage);
  }

}
