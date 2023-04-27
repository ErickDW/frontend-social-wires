import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Store, StoreModule } from "@ngrx/store";
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SystemNotAvailableComponent } from './feature/system-not-available/system-not-available.component';
import { LoginComponent } from './feature/login/login.component';
import { SignInComponent } from './feature/sign-in/sign-in.component';
import { HomeComponent } from './feature/home/home.component';
import { AllMesaggesComponent } from './feature/all-mesagges/all-mesagges.component';
import { MyMesaggesComponent } from './feature/my-mesagges/my-mesagges.component';

@NgModule({
	declarations: [AppComponent, SystemNotAvailableComponent, LoginComponent, SignInComponent, HomeComponent, AllMesaggesComponent, MyMesaggesComponent],
	imports: [
		BrowserModule,
		CoreModule,
		AppRoutingModule,
		HttpClientModule,
		// StoreModule.forRoot(appReducer),
		StoreDevtoolsModule.instrument({
			maxAge: 10
		})
	],
	providers: [CoreModule, AppRoutingModule, Store],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
