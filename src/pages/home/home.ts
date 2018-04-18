import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
 
@IonicPage()
@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
 
  constructor(public nav: NavController, public authData: AuthProvider) {
 
  }
 
  openSearch(){
    this.nav.push(SearchPage);
  }

  logOut() {
    this.authData.logoutUser().then(() => {
        this.nav.setRoot(LoginPage);
    });
  }
 
}