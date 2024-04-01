import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DictionaryWebComponent } from './dictionary-web/dictionary-web.component';
import { HttpClientModule } from '@angular/common/http';
import { ApixuService } from './dictionary-web/apixu.service';
import { CrudComponent } from './crud/crud.component';
import { ThemeService } from './dictionary-web/theme.service';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryWebComponent,
    CrudComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [ApixuService,ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
