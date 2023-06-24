import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/common/shared.module';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

}
