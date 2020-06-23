import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuspenseComponent } from './suspense/suspense.component';
import { DefaultViewDirective } from './default-view.directive';
import { FallbackViewDirective } from './fallback-view.directive';
import { ErrorViewDirective } from './error-view.directive';
import { NotLazyComponent } from './not-lazy/not-lazy.component';
import { NotLazy2Component } from './not-lazy2/not-lazy2.component';

@NgModule({
  declarations: [
    AppComponent,
    SuspenseComponent,
    DefaultViewDirective,
    FallbackViewDirective,
    ErrorViewDirective,
    NotLazyComponent,
    NotLazy2Component,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
