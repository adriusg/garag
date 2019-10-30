import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {PrivacyPage} from '../privacy/privacy.page';
import { ProfileService } from './../profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  name: any;
  email: string;


  constructor(private modalCtrl: ModalController, private profService: ProfileService) {}

  async movePrivacy() {
    const modal = await this.modalCtrl.create({
     component: PrivacyPage
   });

    return await modal.present();
  }

  ngOnInit() {
  }

   CreateRecord() {
    let record = {};
    record['Name'] = "Adriano Carvalho";
    record['Email'] = "adriusg@gmail.com";
    this.profService.create_Profile(record).then(resp => {
      this.name = "";
      this.email = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }


}
