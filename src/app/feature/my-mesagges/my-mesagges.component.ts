import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { IUsersession } from 'src/app/store/states/user-session.state';
import { IFilters } from 'src/app/interfaces/filters.interface';
import { IAppState } from '../../store/states/app.state';
import { IError } from 'src/app/store/states/is-error.state';
import { IMessage, defaultMsgArray } from 'src/app/store/states/message.state';
import { BackService } from '../../services/back.service';
import { CallsBack } from 'src/app/utils/calls-back';
import { Utils } from 'src/app/utils/utils';

@Component({
	selector: 'app-my-mesagges',
	templateUrl: './my-mesagges.component.html',
	styleUrls: ['./my-mesagges.component.scss'],
})
export class MyMesaggesComponent implements OnInit {
	detal: IMessage[] = defaultMsgArray;
	private callsBack: CallsBack;
	filters: IFilters = {
		nick: '',
		title: '',
		day: '',
	};
	days: string[] = ['15-05-2023'];

	constructor(
		private backService: BackService,
		private _store: Store<IAppState>,
		private router: Router
	) {
		this.callsBack = new CallsBack(this._store, this.backService);
	}

	ngOnInit(): void {
		scrollTo(0, 0);

		this._store
			.select((state) => state.userSession)
			.subscribe((response: IUsersession) => {
				this.filters.nick = response.nick;
			});

		this.getDaysInfo();
		this.callsBack.callBackAllMyMesaagesDateFilter(this.filters);
		this.getAllMessagesStore();
	}

	getAllMessagesStore() {
		this._store
			.select((state) => state.allMyMessages)
			.subscribe((response: IMessage[] | any) => {
				const r: IError = response;
				if (r.isError) {
					this.router.navigate(['/error']);
				} else {
					this.detal = response;
				}
			});
	}

	getDaysInfo() {
		this.days.pop();
		let set = new Set();
		set.delete('');
		this.backService
			.filterCharacterAllMessages({nick: this.filters.nick})
			.subscribe((res: IMessage[]) => {
				res.forEach((val) => {
					const day = new Utils().changeDateFormat(val.date);
					set.add(day);
				});
				set.forEach((day: string) => {
					this.days.push(day);
				});
			});
	}

	searchDate(date: string) {
		if (date === 'false') {
			date = '';
		}
		const searchDate = {
			day: date,
		};
		this.filters = {
			...this.filters,
			...searchDate,
		};
		this.callsBack.callBackAllMyMesaagesDateFilter(this.filters);
	}
}
