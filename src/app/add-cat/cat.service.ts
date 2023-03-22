import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  catsRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.catsRef = db.list('cats');
  }

  addCat(cat: any) {
    return this.catsRef.push(cat);
  }

  getCats() {
    return this.catsRef.valueChanges();
  }
}
