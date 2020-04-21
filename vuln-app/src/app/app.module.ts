import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VulnCalculatorComponent } from './vuln-calculator/vuln-calculator.component';
import { VulnEncryptionComponent } from './vuln-encryption/vuln-encryption.component';
import { VulnLoginComponent } from './vuln-login/vuln-login.component';

@NgModule({
  declarations: [
    AppComponent,
    VulnCalculatorComponent,
    VulnEncryptionComponent,
    VulnLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
