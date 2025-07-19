import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BuildService } from '../../services/build.service';
import { Build } from '../../models/player.model';

@Component({
  selector: 'app-build-upload',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './build-upload.component.html',
  styleUrls: ['./build-upload.component.scss']
})
export class BuildUploadComponent {
  build: Build = {
    playerName: '',
    position: '',
    playStyle: '',
    cost: 0,
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
    upvotes: 0,
    imageUrl: ''
  };

  statsList: Array<{ key: keyof Build; label: string }> = [
    { key: 'shooting', label: 'Chute' },
    { key: 'passing', label: 'Passe' },
    { key: 'dribbling', label: 'Drible' },
    { key: 'dexterity', label: 'Destreza' },
    { key: 'lowerBodyStrength', label: 'Força nas Pernas' },
    { key: 'aerialStrength', label: 'Força Aérea' },
    { key: 'defending', label: 'Defesa' },
    { key: 'gk1', label: 'GO1' },
    { key: 'gk2', label: 'GO2' },
    { key: 'gk3', label: 'GO3' },
  ];

  selectedFile?: File;

  constructor(private buildService: BuildService) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedFile = input.files?.[0];
  }

  submitBuild() {
    const payload: Build = {
      ...this.build,
      createdAt: new Date(),
      upvotes: 0
    };

    if (payload.imageUrl && !this.selectedFile) {
      this.buildService.saveBuild(payload).subscribe(() => {
        alert('Build enviada com sucesso!');
        this.resetForm();
      });
    } else {
      this.buildService.uploadBuild(payload, this.selectedFile).subscribe(() => {
        alert('Build enviada com sucesso!');
        this.resetForm();
      });
    }
  }

  private resetForm() {
    this.build = {
      playerName: '',
      position: '',
      playStyle: '',
      cost: 0,
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
      upvotes: 0,
      imageUrl: ''
    };
    this.selectedFile = undefined;
  }
}
