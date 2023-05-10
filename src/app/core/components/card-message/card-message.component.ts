import { Component, Input, OnInit } from '@angular/core';
import { IMessage, defaultMsg } from 'src/app/store/states/message.state';
import { Utils } from 'src/app/utils/utils';
@Component({
	selector: 'app-card-message',
	templateUrl: './card-message.component.html',
	styleUrls: ['./card-message.component.scss'],
})
export class CardMessageComponent implements OnInit {
	@Input() detal: IMessage = defaultMsg;
	constructor() {}

	ngOnInit(): void {
	}

	dateFormat(date : string){
		return new Utils().changeDateFormatComplete(date);
	}
}
