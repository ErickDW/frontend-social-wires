import { Component, OnInit } from '@angular/core';
import { IMessage, defaultMsg } from 'src/app/store/states/message.state';

@Component({
	selector: 'app-create-message',
	templateUrl: './create-message.component.html',
	styleUrls: ['./create-message.component.scss'],
})
export class CreateMessageComponent implements OnInit {
	detal: IMessage = defaultMsg;

	constructor() {}

	ngOnInit(): void {}
}
