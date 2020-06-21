import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuspenseComponent } from './suspense/suspense.component';
import { DefaultViewDirective } from './default-view.directive';
import { FallbackViewDirective } from './fallback-view.directive';
import { ErrorViewDirective } from './error-view.directive';

@NgModule({
  declarations: [
    AppComponent,
    SuspenseComponent,
    DefaultViewDirective,
    FallbackViewDirective,
    ErrorViewDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
