import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { inboxItems } from '../../../global';

@Component({
  selector: 'app-recieved-mails',
  templateUrl: './recieved-mails.component.html',
  styleUrls: ['./recieved-mails.component.css']
})
export class RecievedMailsComponent implements OnInit, OnChanges {

  inboxItems: object = inboxItems;
  activeItem: any;
  @Input() activeId: number | undefined;

  constructor() { }

  ngOnChanges(activeId: any): void {
    this.getActiveItem(this.activeId);
  }

  ngOnInit(): void {
    this.activeId = 0;
    this.getActiveItem(this.activeId);
  }

  getActiveItem(id: any): void {
    for (let item of inboxItems) {
      if (item['id'] === id) {
        this.activeItem = {
          ...item
        }
        break;
      }

      
    }
  }

}
