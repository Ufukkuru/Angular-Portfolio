import { Component } from '@angular/core';
import { MainComponent } from "./main/main.component";
import { AboutComponent } from "./about/about.component";
import { ProjectComponent } from "./project/project.component";
import { ContactComponent } from "./contact/contact.component";
import { SharedModule } from 'src/app/common/shared.module';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [SharedModule, MainComponent, AboutComponent, ProjectComponent, ContactComponent]
})
export class HomeComponent {

}
