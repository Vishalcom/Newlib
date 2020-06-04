import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { IroLibraryComponent } from './components/iro-library/iro-library.component';
import { IroButtonComponent } from './components/iro-button/iro-button.component';
import { IrobuttonDemoComponent } from './demo/irobutton-demo/irobutton-demo.component';
import { IroInputboxComponent } from './components/iro-inputbox/iro-inputbox.component';
import { IroinputDemoComponent } from './demo/iroinput-demo/iroinput-demo.component';
import { IroButtonModule } from 'iro-component-lib';



@NgModule({
  declarations: [
    AppComponent,
    IroLibraryComponent,
    IroButtonComponent,
    IrobuttonDemoComponent,
    IroInputboxComponent,
    IroinputDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    IroButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
