import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EbookTermPage } from './ebook-term.page';

const routes: Routes = [
  {
    path: '',
    component: EbookTermPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EbookTermPageRoutingModule {}
