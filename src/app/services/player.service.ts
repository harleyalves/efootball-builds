import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Player } from '../models/player.model';

@Injectable({ providedIn: 'root' })
export class PlayerService {
  constructor(private firestore: AngularFirestore) {}

  getPlayers() {
    return this.firestore.collection<Player>('players').valueChanges({ idField: 'id' });
  }

  getPlayer(id: string) {
    return this.firestore.collection('players').doc<Player>(id).valueChanges({ idField: 'id' });
  }
}