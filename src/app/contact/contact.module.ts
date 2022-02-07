import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './components/contact.component'

import { ContactRoutingModule } from './contact-routing.module'
import { SharedModule } from './../shared/shared.module'



@NgModule({
  declarations: [ ContactComponent ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
  ]
})
export class ContactModule { }
