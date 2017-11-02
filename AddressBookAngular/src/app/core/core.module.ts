import { RouterModule } from '@angular/router';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { SharedModule } from './../shared/shared.module';
import { TopMenuComponent } from './top-menu/top-menu.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
  ],
  declarations: [
    TopMenuComponent,
  ],
  exports: [
    TopMenuComponent,
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
