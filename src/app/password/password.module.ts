import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PasswordPage } from './password.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PasswordPageRoutingModule } from './password-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PasswordPageRoutingModule
  ],
  declarations: [PasswordPage]
})
export class PasswordPageModule { }
