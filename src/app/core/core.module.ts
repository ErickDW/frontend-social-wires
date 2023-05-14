import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CardMessageComponent } from './components/card-message/card-message.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { DateSelectComponent } from './components/date-select/date-select.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotifyComponent } from './components/notify/notify.component';

@NgModule({
	declarations: [
		CardMessageComponent,
		TextInputComponent,
		DateSelectComponent,
		NavbarComponent,
		FooterComponent,
		NotifyComponent,
	],
	imports: [CommonModule, RouterModule],
	exports: [
		CardMessageComponent,
		TextInputComponent,
		DateSelectComponent,
		NavbarComponent,
		FooterComponent,
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule {}
