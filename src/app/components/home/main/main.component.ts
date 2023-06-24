import { Component } from '@angular/core';
import { SharedModule } from 'src/app/common/shared.module';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  
}
