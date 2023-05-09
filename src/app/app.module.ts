import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SystemNotAvailableComponent } from './feature/system-not-available/system-not-available.component';
import { CreateMessageComponent } from './feature/create-message/create-message.component';
import { AllMesaggesComponent } from './feature/all-mesagges/all-mesagges.component';
import { MyMesaggesComponent } from './feature/my-mesagges/my-mesagges.component';
import { SignInComponent } from './feature/sign-in/sign-in.component';
import { SignUpComponent } from './feature/sign-up/sign-up.component';
import { appReducer } from './store/reducers/app.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieInterceptor } from './interceptors/cookie.interceptor';

@NgModule({
	declarations: [
		AppComponent,
		SystemNotAvailableComponent,
		CreateMessageComponent,
		AllMesaggesComponent,
		MyMesaggesComponent,
		SignInComponent,
		SignUpComponent,
	],
	imports: [
		BrowserModule,
		CoreModule,
		AppRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
		StoreModule.forRoot(appReducer),
		StoreDevtoolsModule.instrument({
			maxAge: 10,
		}),
	],
	providers: [
		CoreModule,
		AppRoutingModule,
		Store,
		{ provide: HTTP_INTERCEPTORS, useClass: CookieInterceptor, multi: true },
	],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
