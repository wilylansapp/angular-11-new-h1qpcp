import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AcrModalModule } from './acr-modal/acr-modal.module';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AcrModalModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
