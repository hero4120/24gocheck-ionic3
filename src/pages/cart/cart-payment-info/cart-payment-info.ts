import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartPaymentMethodPage } from '../cart-payment-method/cart-payment-method';

/**
 * Generated class for the CartPaymentInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart-payment-info',
  templateUrl: 'cart-payment-info.html',
})
export class CartPaymentInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onPaymentMethod() {
    this.navCtrl.push(CartPaymentMethodPage);
  }

}
