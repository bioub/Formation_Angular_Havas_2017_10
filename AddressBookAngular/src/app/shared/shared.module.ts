import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
   // NgbCollapseModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    NgbCollapseModule,
  ]
})
export class SharedModule { }
