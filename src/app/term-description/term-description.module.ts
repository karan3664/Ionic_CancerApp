import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermDescriptionPageRoutingModule } from './term-description-routing.module';

import { TermDescriptionPage } from './term-description.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermDescriptionPageRoutingModule
  ],
  declarations: [TermDescriptionPage]
})
export class TermDescriptionPageModule {}
