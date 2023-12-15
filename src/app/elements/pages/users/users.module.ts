import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { UsersRoutingModule, routedComponents } from './users-routing.module';
import { MenuComponent } from '../../menu/menu.component';


@NgModule({
  declarations: [
  ],
  imports: [CommonModule, UsersRoutingModule, FormsModule],
  providers: [MenuComponent],

  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
})
export class UsersModule {}
