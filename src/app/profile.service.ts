import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

constructor(
    private firestore: AngularFirestore
  ) { }


  create_Profile(record) {
    return this.firestore.collection('profile').add(record);
  }

  read_Profile() {
    return this.firestore.collection('profile').snapshotChanges();
  }

  update_Profile(recordID,record){
    this.firestore.doc('profile/' + recordID).update(record);
  }

  //delete_Profile(record_id) {
   // this.firestore.doc('Students/' + record_id).delete();
  //}

}
