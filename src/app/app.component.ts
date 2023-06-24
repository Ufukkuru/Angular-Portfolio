import { Component } from '@angular/core';
import { SharedModule } from './common/shared.module';

@Component({
  selector: 'app-root',
  template:`
  <router-outlet></router-outlet>`,
  standalone:true,
  imports:[SharedModule]
})
export class AppComponent {
  
}
