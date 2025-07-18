import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Player } from '../models/player.model';
import { MOCK_PLAYERS } from '../mock-data/mock-players';

@Injectable({ providedIn: 'root' })
export class PlayerService {
  private apiUrl = 'http://localhost:3000/players'; // só para produção local

  constructor(private http: HttpClient) {}

  getPlayers(): Observable<Player[]> {
    // Para desenvolvimento com mock:
    return of(MOCK_PLAYERS);

    // Para produção local com backend rodando:
    // return this.http.get<Player[]>(this.apiUrl);
  }

  getPlayer(id: number): Observable<Player | null> {
    // Para desenvolvimento com mock:
    const player = MOCK_PLAYERS.find(p => p.id === id);
    return of(player ? { ...player } : null);

    // Para produção local com backend rodando:
    // return this.http.get<Player>(`${this.apiUrl}/${id}`);
  }
}
