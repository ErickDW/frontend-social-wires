import { Component, OnInit } from '@angular/core';
import { IMessage, defaultMsgArray } from 'src/app/store/states/message.state';

@Component({
	selector: 'app-all-mesagges',
	templateUrl: './all-mesagges.component.html',
	styleUrls: ['./all-mesagges.component.scss'],
})
export class AllMesaggesComponent implements OnInit {
	detal: IMessage[] = defaultMsgArray;
	constructor() {}

	ngOnInit(): void {}
}
