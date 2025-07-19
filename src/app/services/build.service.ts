// build.service.ts
import { Injectable } from '@angular/core';
import {  addDoc } from '@angular/fire/firestore';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { Build } from '../models/player.model';
import { finalize } from 'rxjs/operators';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable, from, switchMap, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BuildService {
  constructor(
    private firestore: Firestore,
    private storage: Storage
  ) {}

getAllBuilds(): Observable<Build[]> {
  const buildsRef = collection(this.firestore, 'builds');
  return collectionData(buildsRef, { idField: 'id' }) as Observable<Build[]>;
}

  uploadBuild(build: Build, image?: File): Observable<void> {
    const newBuild: Build = { 
      ...build,
      createdAt: new Date(),
      upvotes: 0
    };

    if (image) {
      const filePath = `builds/${Date.now()}_${image.name}`;
      const storageRef = ref(this.storage, filePath);
      
      return from(uploadBytes(storageRef, image)).pipe(
        switchMap(snapshot => from(getDownloadURL(snapshot.ref))),
        switchMap(url => {
          newBuild.imageUrl = url;
          return this.saveBuild(newBuild);
        })
      );
    } else {
      return this.saveBuild(newBuild);
    }
  }

  /** para salvar direto quando user só passar URL */
  saveBuild(build: Build): Observable<void> {
    const buildsRef = collection(this.firestore, 'builds');
    return from(addDoc(buildsRef, build)).pipe(
      switchMap(() => of(undefined))
    );
  }
}
