import { Component, OnInit } from '@angular/core';
import { IMessage, defaultMsgArray } from 'src/app/store/states/message.state';

@Component({
	selector: 'app-my-mesagges',
	templateUrl: './my-mesagges.component.html',
	styleUrls: ['./my-mesagges.component.scss'],
})
export class MyMesaggesComponent implements OnInit {
	detal: IMessage[] = defaultMsgArray;
	constructor() {}

	ngOnInit(): void {}
}
