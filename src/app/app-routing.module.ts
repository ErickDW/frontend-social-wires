import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import {  }
import { SignInComponent } from './feature/sign-in/sign-in.component';
import { SignUpComponent } from './feature/sign-up/sign-up.component';
import { CreateMessageComponent } from './feature/create-message/create-message.component';
import { AllMesaggesComponent } from './feature/all-mesagges/all-mesagges.component';
import { MyMesaggesComponent } from './feature/my-mesagges/my-mesagges.component';
import { SystemNotAvailableComponent } from './feature/system-not-available/system-not-available.component';
import { LoginGuard } from './guard/login.guard';
import { UserCheckGuard } from './guard/user-check.guard';

const routes: Routes = [
	{ path: 'signin', component: SignInComponent, canActivate: [UserCheckGuard]},
	{ path: 'signup', component: SignUpComponent, canActivate: [UserCheckGuard]},

	{ path: '', redirectTo: '/signin', pathMatch: 'full' },
	{
		path: 'allmessages',
		component: AllMesaggesComponent,
		canActivate: [LoginGuard],
	},
	{
		path: 'message',
		component: CreateMessageComponent,
		canActivate: [LoginGuard],
	},
	{
		path: 'mymessages',
		component: MyMesaggesComponent,
		canActivate: [LoginGuard],
	},

	{ path: 'error', component: SystemNotAvailableComponent },
	{ path: '**', redirectTo: '/error' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppRoutingModule {}
