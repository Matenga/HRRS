import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {RoomsProvider} from "../../providers/rooms/rooms";

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {

  public room: any;
  public details: any;
  public checkIn: any;
  public checkOut: any;


  constructor(
    public nav: NavController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public roomsService: RoomsProvider,
    public loadingCtrl: LoadingController
  ) {

    this.room = this.navParams.get('room');
    this.details = this.navParams.get('details');
    this.checkIn = new Date(this.details.from).toString().substring(0, 15);
    this.checkOut = new Date(this.details.to).toString().substring(0, 15);
  }

  public openQuote() {
    this.navCtrl.push('QuotationPage');
  }

  public book() {

    let newReservation = {
      id: this.room._id,
      from: this.details.from.substring(0, 10),
      to: this.details.from.substring(0, 10)
    };

    let loading = this.loadingCtrl.create({
      content: "booking Please wait...",
      duration: 3000
    });

    loading.present().then(() => {
  this.roomsService.reserveRoom(newReservation).then((res) => {
    loading.dismiss().then(() => this.nav.popToRoot());
  }, 
    (err) => {
    console.log(err);
  });
});
  }
}

