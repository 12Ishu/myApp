import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InboxComponent } from './side-nav/inbox/inbox.component';
import { SentComponent } from './side-nav/sent/sent.component';
import { DraftsComponent } from './side-nav/drafts/drafts.component';
import { TrashComponent } from './side-nav/trash/trash.component';

const routes: Routes = [
  { path: '', redirectTo: '/inbox', pathMatch: 'full' },
  { path: 'inbox', component: InboxComponent },
  { path: 'sent', component: SentComponent },
  { path: 'drafts', component: DraftsComponent },
  { path: 'trash', component: TrashComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
}
