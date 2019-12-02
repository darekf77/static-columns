import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StaticColumnsModule } from 'components';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: true }),
    StaticColumnsModule
  ],
  exports: [
    StaticColumnsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
