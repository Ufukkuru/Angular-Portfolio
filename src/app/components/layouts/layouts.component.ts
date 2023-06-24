import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { SharedModule } from 'src/app/common/shared.module';


@Component({
    selector: 'app-layouts',
    standalone: true,
    templateUrl: './layouts.component.html',
    styleUrls: ['./layouts.component.css'],
    imports: [SharedModule, NavbarComponent,]
})
export class LayoutsComponent {

}
