import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
    id: 0,
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
    this.buildService.uploadBuild(this.build, this.selectedFile).subscribe({
      next: () => alert('Build enviada com sucesso!'),
      error: () => alert('Erro no envio')
    });
  }
}