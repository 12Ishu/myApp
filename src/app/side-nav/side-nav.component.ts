import { Component, OnInit } from '@angular/core';
import { inboxItems } from '../global'; 

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  navListItems: Array<string> = ["inbox", "sent", "drafts", "trash"];
  noOfInboxItems: number = inboxItems.length;

  constructor() { }

  ngOnInit(): void {
  }

}
