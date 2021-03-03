import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EbookTermPageRoutingModule } from './ebook-term-routing.module';

import { EbookTermPage } from './ebook-term.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EbookTermPageRoutingModule
  ],
  declarations: [EbookTermPage]
})
export class EbookTermPageModule {}
