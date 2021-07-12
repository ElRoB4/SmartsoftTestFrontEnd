import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HttpClientJsonpModule  } from '@angular/common/http'
import { AppComponent } from './app.component';
import { TablasComponent } from './tablas/tablas.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';




@NgModule({
  declarations: [
    AppComponent,
    TablasComponent
  ],
  imports: [
    BrowserModule,
    DropDownsModule,
    BrowserAnimationsModule,
    GridModule,
    HttpClientModule,
    HttpClientJsonpModule 
  ],
 // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
