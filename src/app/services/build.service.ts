import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Build } from '../models/player.model';
import { finalize } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BuildService {
  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  uploadBuild(build: Build, image?: File) {
    const newBuild = { 
      ...build,
      createdAt: new Date(),
      upvotes: 0
    };

    // Remove id existente se houver
    delete newBuild.id;

    if (image) {
      const filePath = `builds/${Date.now()}_${image.name}`;
      const fileRef = this.storage.ref(filePath);
      const uploadTask = this.storage.upload(filePath, image);
      
      return uploadTask.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            newBuild.imageUrl = url;
            this.saveBuild(newBuild);
          });
        })
      ).subscribe();
    } else {
      return this.saveBuild(newBuild);
    }
  }

  private saveBuild(build: Build) {
    return this.firestore.collection('builds').add(build);
  }

  getBuildsByPlayer(playerId: string) {
    return this.firestore.collection<Build>('builds', ref => 
      ref.where('playerId', '==', playerId)
         .orderBy('createdAt', 'desc')
    ).valueChanges({ idField: 'id' });
  }
}