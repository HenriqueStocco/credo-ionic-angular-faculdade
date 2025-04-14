import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserPage } from './user.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { UserPageRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    UserPageRoutingModule
  ],
  declarations: [UserPage]
})
export class UserPageModule { }
