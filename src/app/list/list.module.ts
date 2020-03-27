import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPageRoutingModule } from './list-routing.module';

import { ListPage } from './list.page';
import { ColorchangeDirective } from '../directives/colorchange.directive';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPageRoutingModule,
    
  ],
  declarations: [ListPage,ColorchangeDirective]
})
export class ListPageModule {}
