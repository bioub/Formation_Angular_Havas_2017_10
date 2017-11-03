import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { SharedModule } from '../shared/shared.module';
import { ContactService } from './contact.service';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [
    {provide: ContactService, useClass: ContactService}
    // ContactService,
  ],
  declarations: [
    TopMenuComponent,
    NotFoundComponent,
  ],
  exports: [
    TopMenuComponent,
    NotFoundComponent,
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
