import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuildService } from '../../services/build.service';
import { Build } from '../../models/player.model';
import { CommonModule } from '@angular/common';
import { BuildDetailsComponent } from '../build-details/build-details.component';

@Component({
  selector: 'app-build-detail',
  standalone: true,
  imports: [CommonModule, BuildDetailsComponent],
  templateUrl: './build-detail.component.html',
  styleUrls: ['./build-detail.component.scss']
})
export class BuildDetailComponent implements OnInit {
  build: Build | null = null;

  constructor(
    private route: ActivatedRoute,
    private buildService: BuildService
  ) {}

ngOnInit(): void {
  const buildId = this.route.snapshot.paramMap.get('id');
  if (buildId) {
    this.buildService.getAllBuilds().subscribe(builds => {
      // Add null check and type safety
      const foundBuild = builds.find(b => b.id === buildId);
      if (foundBuild) {
        this.build = foundBuild;
      } else {
        console.warn(`Build with ID ${buildId} not found`);
        this.build = null;
      }
    });
  }
}
}