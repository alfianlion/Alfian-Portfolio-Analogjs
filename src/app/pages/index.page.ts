import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
  ],
  templateUrl: './index.page.html',
})
export default class HomeComponent {
  value = 1;
}
