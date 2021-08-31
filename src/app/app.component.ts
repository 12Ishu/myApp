import { Component } from '@angular/core';
import { inboxItems } from './global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inboxItems = inboxItems; 
  
}

