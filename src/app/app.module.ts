import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { environment } from "../environments/environment";

import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers  } from './store/reducers';
import { effects } from './store/effects';

import { ViewsModule } from './views/views.module';
import { HeaderLayout } from './views/layouts';
import { AppComponent } from './app.component';

import {
  HomeController,
  CartController,
  CatalogController,
  CatalogViewController
} from './controllers';

@NgModule({
  declarations: [
    AppComponent,
    HomeController,
    CartController,
    CatalogController,
    CatalogViewController,
    HeaderLayout
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ApolloModule,
    HttpLinkModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({maxAge:50}),
    ViewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      link: httpLink.create({uri: environment.apiUrl}),
      cache: new InMemoryCache()
    });
  }
}
