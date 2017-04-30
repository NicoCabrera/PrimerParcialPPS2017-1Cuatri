import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
@Injectable()
export class AppData {

  constructor(private af:AngularFire) {
  }


  getHistoricalMatches() {
    return this.af.database.list('/matches');
  }
}
