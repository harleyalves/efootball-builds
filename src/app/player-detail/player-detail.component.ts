import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../services/player.service';
import { BuildService } from '../services/build.service';
import { BuildDetailsComponent } from '../components/build-details/build-details.component';
import { BuildUploadComponent } from '../components/build-upload/build-upload.component';
import { Player } from '../models/player.model';
import { Build } from '../models/player.model';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    BuildDetailsComponent,
    BuildUploadComponent
  ]
})
export class PlayerDetailComponent implements OnInit {
  player: Player | null = null;
  builds: Build[] = [];
  currentBuild: Build | null = null;
  playerId!: string;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private buildService: BuildService
  ) {}

  ngOnInit(): void {
    this.playerId = this.route.snapshot.paramMap.get('id') || '';
    
    if (this.playerId) {
      this.playerService.getPlayer(this.playerId).subscribe(player => {
        this.player = player as Player;
      });

      this.buildService.getBuildsByPlayer(this.playerId).subscribe(builds => {
        this.builds = builds as Build[];
        if (this.builds.length) {
          this.currentBuild = this.builds[0];
        }
      });
    }
  }

  selectBuild(build: Build) {
    this.currentBuild = build;
  }
}