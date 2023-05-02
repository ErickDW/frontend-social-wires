import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IMessage, defaultMsg } from 'src/app/store/states/message.state';

@Component({
	selector: 'app-create-message',
	templateUrl: './create-message.component.html',
	styleUrls: ['./create-message.component.scss'],
})
export class CreateMessageComponent implements OnInit {
	detal: IMessage = defaultMsg;
	placeMsg: string = 'create message for share white friends. Max 700 chars';
	// title$ = new Subject<string>();
	titleNew: string = '';
	constructor() {}

	ngOnInit(): void {}

	title(event: Event): void {
		const element = event.currentTarget as HTMLInputElement;
		const msgTitle = {
			title : this.threePoints(element.value),
		}
		this.detal = {
			...this.detal,
			...msgTitle
		};
	}

	msg(event: Event): void {
		const element = event.currentTarget as HTMLInputElement;
		const msgMsg = {
			message : this.threePoints(element.value),
		}
		this.detal = {
			...this.detal,
			...msgMsg
		};
	}

	threePoints(text: string) : string{
		return text === '' ? '...' : text;
	}


}
