import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermDescriptionPage } from './term-description.page';

const routes: Routes = [
  {
    path: '',
    component: TermDescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermDescriptionPageRoutingModule {}
