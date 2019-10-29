import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {PrivacyPage} from '../privacy/privacy.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private modalCtrl: ModalController) {}

  async movePrivacy() {
    const modal = await this.modalCtrl.create({
     component: PrivacyPage
   });

    return await modal.present();
  }

  ngOnInit() {
  }

}
