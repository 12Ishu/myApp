import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InboxComponent } from './side-nav/inbox/inbox.component';
import { SentComponent } from './side-nav/sent/sent.component';
import { DraftsComponent } from './side-nav/drafts/drafts.component';
import { TrashComponent } from './side-nav/trash/trash.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RecievedMailsComponent } from './side-nav/inbox/recieved-mails/recieved-mails.component';

@NgModule({
  declarations: [
    AppComponent,
    InboxComponent,
    SentComponent,
    DraftsComponent,
    TrashComponent,
    SideNavComponent,
    RecievedMailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
