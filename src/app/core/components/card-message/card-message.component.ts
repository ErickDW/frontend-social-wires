import { Component, Input, OnInit } from '@angular/core';
import { IMessage, defaultMsg } from 'src/app/store/states/message.state';
@Component({
	selector: 'app-card-message',
	templateUrl: './card-message.component.html',
	styleUrls: ['./card-message.component.scss'],
})
export class CardMessageComponent implements OnInit {
	@Input() detal: IMessage = defaultMsg;
	constructor() {}

	ngOnInit(): void {}
}
