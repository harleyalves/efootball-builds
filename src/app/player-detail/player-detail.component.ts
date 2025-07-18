import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { Player } from '../models/player.model';
import { Build } from '../models/player.model';
import { PlayerService } from '../services/player.service';
import { BuildDetailsComponent } from '../components/build-details/build-details.component';
import { BuildUploadComponent } from '../components/build-upload/build-upload.component';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    BuildDetailsComponent,
    BuildUploadComponent
  ]
})
export class PlayerDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private playerSvc = inject(PlayerService);

  player: Player | null = null;
  builds: Build[] = [];
  currentBuild: Build | null = null;

ngOnInit(): void {
  const playerId = this.route.snapshot.paramMap.get('id');
  if (playerId) {
    this.playerSvc.getPlayer(+playerId).subscribe(player => {
      if (player) {
        this.player = player;
        this.builds = player.builds || [];
        if (this.builds.length) {
          this.currentBuild = this.builds[0];
        }
      } else {
        // Se o jogador não for encontrado, evite erros futuros
        console.error('Jogador não encontrado');
        // Aqui você pode redirecionar, mostrar uma mensagem etc.
      }
    });
  }
}


  selectBuild(build: Build) {
    this.currentBuild = build;
  }
}