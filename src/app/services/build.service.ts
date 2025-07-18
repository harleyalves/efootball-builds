import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Build } from '../models/player.model';

@Injectable({ providedIn: 'root' })
export class BuildService {
  private apiUrl = 'http://localhost:3000/builds';
  private mockBuilds: Build[] = [];

  constructor(private http: HttpClient) {}

  uploadBuild(build: Build, image?: File): Observable<any> {
    // Para desenvolvimento:
    const newBuild = {
      ...build,
      id: Date.now(),
      upvotes: 0,
      imageUrl: image ? URL.createObjectURL(image) : undefined
    };
    this.mockBuilds.push(newBuild);
    return of(newBuild);
    
    // Para produção:
    // const formData = new FormData();
    // formData.append('build', JSON.stringify(build));
    // if (image) formData.append('image', image);
    // return this.http.post(this.apiUrl, formData);
  }

  getBuildsByPlayer(playerName: string): Observable<Build[]> {
    // Para desenvolvimento:
    return of(this.mockBuilds.filter(b => b.playerName === playerName));
    
    // Para produção:
    // return this.http.get<Build[]>(`${this.apiUrl}?playerName=${playerName}`);
  }
}