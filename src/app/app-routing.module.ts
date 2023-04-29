import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import {  }
import { LoginComponent } from './feature/login/login.component';
import { SignInComponent } from './feature/sign-in/sign-in.component';
import { HomeComponent } from './feature/home/home.component';
import { AllMesaggesComponent } from './feature/all-mesagges/all-mesagges.component';
import { MyMesaggesComponent } from './feature/my-mesagges/my-mesagges.component';
import { SystemNotAvailableComponent } from './feature/system-not-available/system-not-available.component';

const routes: Routes = [

	{ path: "login", component: LoginComponent},
	{ path: "signin", component: SignInComponent },

	{ path: "", redirectTo: "/home", pathMatch: "full"},
	{ path: "home", component: HomeComponent},
	{ path: "allmessages", component: AllMesaggesComponent},
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
