import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Drinker } from './drinker.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class DrinkerService {

  constructor(private firestore: AngularFirestore) { }

  getDrinkers() {
    return this.firestore.collection('drinkers', ref => ref.orderBy('firstName', 'asc')).snapshotChanges();
  }

  createDrinker(drinker: Drinker) {
    return this.firestore.collection('drinkers').add(drinker);
  }

  updateDrinker(drinker: Drinker) {
    delete drinker.id;
    this.firestore.doc('drinkers/' + drinker.id).update(drinker);
  }

  addBeer(drinker: Drinker) {
    this.firestore.doc('drinkers/' + drinker.id).update({
      beersOwed: firebase.firestore.FieldValue.increment(1)
    });
  }

  subtractBeer(drinker: Drinker) {
    if (drinker.beersOwed > 0) {
      this.firestore.doc('drinkers/' + drinker.id).update({
        beersOwed: firebase.firestore.FieldValue.increment(-1)
      });
    }
  }

  deleteDrinker(drinkerId: string) {
    this.firestore.doc('drinkers/' + drinkerId).delete();
  }
}
