import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import {  }
import { SignInComponent } from './feature/sign-in/sign-in.component';
import { SignUpComponent } from './feature/sign-up/sign-up.component';
import { CreateMessageComponent } from './feature/create-message/create-message.component';
import { AllMesaggesComponent } from './feature/all-mesagges/all-mesagges.component';
import { MyMesaggesComponent } from './feature/my-mesagges/my-mesagges.component';
import { SystemNotAvailableComponent } from './feature/system-not-available/system-not-available.component';

const routes: Routes = [

	{ path: "signin", component: SignInComponent},
	{ path: "signup", component: SignUpComponent },

	{ path: "", redirectTo: "/allmessages", pathMatch: "full"},
	{ path: "allmessages", component: AllMesaggesComponent},
	{ path: "message", component: CreateMessageComponent},
	{ path: "mymessages", component: MyMesaggesComponent},

	{ path: "error", component: SystemNotAvailableComponent },
	{ path: "**", redirectTo: "/error" }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppRoutingModule {}
