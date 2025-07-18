import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Build } from '../../models/player.model';

@Component({
  selector: 'app-build-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './build-details.component.html',
  styleUrls: ['./build-details.component.scss']
})
export class BuildDetailsComponent {
  @Input() build!: Build;
}