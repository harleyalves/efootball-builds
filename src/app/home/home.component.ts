import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BuildService } from '../services/build.service';
import { Build } from '../models/player.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] 
 
})
export class HomeComponent implements OnInit {
  builds: Build[] = [];

  constructor(private buildService: BuildService) {}

ngOnInit(): void {
  this.buildService.getAllBuilds().subscribe(builds => {
    this.builds = builds;
  });
}
}