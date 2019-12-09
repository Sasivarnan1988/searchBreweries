import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchviewComponent } from './searchview/searchview.component';
import { InterceptorService } from './services/interceptor.service';
import { PublicapiService } from './services/publicapi.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PublicapiService, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }