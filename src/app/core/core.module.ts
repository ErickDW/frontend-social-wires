import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from './components/button/button.component';
import { CardMessageComponent } from './components/card-message/card-message.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { NotificationComponent } from './components/notification/notification.component';
import { DateSelectComponent } from './components/date-select/date-select.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
	declarations: [
		ButtonComponent,
		CardMessageComponent,
		TextInputComponent,
		TextAreaComponent,
		NotificationComponent,
		DateSelectComponent,
		NavbarComponent,
		FooterComponent,
	],
	imports: [CommonModule, RouterModule],
	exports: [
		ButtonComponent,
		CardMessageComponent,
		TextInputComponent,
		TextAreaComponent,
		NotificationComponent,
		DateSelectComponent,
		NavbarComponent,
		FooterComponent,
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule {}
