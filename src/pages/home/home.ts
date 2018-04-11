import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { SearchPage } from '../search/search';
 
@IonicPage()
@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
 
  constructor(public nav: NavController) {
 
  }
 
  openSearch(){
    this.nav.push(SearchPage);
  }
 
}