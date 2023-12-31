import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/common/shared.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
}
