import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BuildService } from '../../services/build.service';
import { Build } from '../../models/player.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-build-upload',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './build-upload.component.html',
  styleUrls: ['./build-upload.component.scss']
})
export class BuildUploadComponent {
  @Input() playerId!: string; // Recebe o ID do jogador

  build: Build = {
    playerId: '',
    playerName: '',
    shooting: 0,
    passing: 0,
    dribbling: 0,
    dexterity: 0,
    lowerBodyStrength: 0,
    aerialStrength: 0,
    defending: 0,
    gk1: 0,
    gk2: 0,
    gk3: 0,
    upvotes: 0
  };
  
  selectedFile?: File;

  constructor(private buildService: BuildService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  submitBuild() {
    // Define o playerId
    this.build.playerId = this.playerId;
    
    this.buildService.uploadBuild(this.build, this.selectedFile);
    alert('Build enviada com sucesso!');
    this.resetForm();
  }

  private resetForm() {
    this.build = {
      playerId: this.playerId,
      playerName: '',
      shooting: 0,
      passing: 0,
      dribbling: 0,
      dexterity: 0,
      lowerBodyStrength: 0,
      aerialStrength: 0,
      defending: 0,
      gk1: 0,
      gk2: 0,
      gk3: 0,
      upvotes: 0
    };
    this.selectedFile = undefined;
  }
}