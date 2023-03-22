import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class Service {
  ref: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.ref = db.list('teams');
  }

  addTeam(team: any) {
    return this.ref.push(team);
  }

  getTeams() {
    return this.ref.valueChanges();
  }
}
