// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { PublicModule } from './components/public/public.module';
import { SecureModule } from './components/secure/secure.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

//  Components
import { AppComponent } from './app.component';
import { PublicComponent } from './components/public/public.component';
import { SecureComponent } from './components/secure/secure.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    SecureComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    PublicModule,
    SecureModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
