import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IMessage, defaultMsg } from 'src/app/store/states/message.state';
import { BackService } from '../../services/back.service';
import { ILogIn } from 'src/app/interfaces/filters.interface';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/states/app.state';
import { Router } from '@angular/router';

import { CallsBack } from 'src/app/utils/calls-back';
import { IUsersession } from 'src/app/store/states/user-session.state';
import { IError } from 'src/app/store/states/is-error.state';
import { Utils } from 'src/app/utils/utils';
@Component({
	selector: 'app-create-message',
	templateUrl: './create-message.component.html',
	styleUrls: ['./create-message.component.scss'],
})
export class CreateMessageComponent implements OnInit {
	detal: IMessage = {
		date: '',
		message: '...',
		nick: '',
		title: '...',
	};

	placeMsg: string = 'create message for share white friends. Max 700 chars';
	titleNew: string = '';

	callsBack: CallsBack;

	constructor(
		private backService: BackService,
		private _store: Store<IAppState>,
		private router: Router
	) {
		this.callsBack = new CallsBack(this._store, this.backService);
	}

	ngOnInit(): void {
		this._store
			.select((state) => state.userSession)
			.subscribe((response: IUsersession) => {
				this.detal.nick = response.nick;
			});
	}



	inputData(event: Event){
		const dataStruc = new Utils().inputData(event,this.detal, true) as IMessage;
		this.detal = dataStruc;
	}

	onSubmit(event: Event): void {
		event.preventDefault();
		if(this.detal.title === '...' || this.detal.message === '...'){
			alert('tu mensage debe tener titulo y contenido');
			return
		}else{
			this.callsBack.callBackCreateMessage(this.detal);
			this.detal.title = '...'
			this.detal.message = '...'
		}
	}
}
