import { Component } from '@angular/core';
import { SharedModule } from 'src/app/common/shared.module';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

}
