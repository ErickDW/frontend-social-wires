import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { IAppState } from '../../store/states/app.state';
import { IError } from 'src/app/store/states/is-error.state';
import { IFilters } from 'src/app/interfaces/filters.interface';
import { IMessage, defaultMsgArray } from 'src/app/store/states/message.state';
import { LoadCurrentAllMessagesSuccess } from 'src/app/store/actions/ecurrent-all-messages.action';
import { CallsBack } from 'src/app/utils/calls-back';
import { Utils } from 'src/app/utils/utils';
import { BackService } from '../../services/back.service';
@Component({
	selector: 'app-all-mesagges',

	templateUrl: './all-mesagges.component.html',
	styleUrls: ['./all-mesagges.component.scss'],
})
export class AllMesaggesComponent implements OnInit {
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
		this.getDaysInfo();
		this.callsBack.callBackAllMesaagesFilter();
		this.getAllMessagesStore();
	}

	ngOnDestroy(): void {
		this.callsBack.callBackAllMesaagesFilter();
	}

	search(event: Event) {
		const element = event.currentTarget as HTMLInputElement;
		const search = {
			nick: element.value,
		};
		this.filters = {
			...this.filters,
			...search,
		};
		this.callsBack.callBackAllMesaagesFilter(this.filters);
	}

	getAllMessagesStore() {
		this._store
			.select((state) => state.allMessages)
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
			.filterCharacterAllMessages()
			.subscribe((res: IMessage[]) => {
				this._store.dispatch(
					new LoadCurrentAllMessagesSuccess(res)
				);
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
		this.callsBack.callBackAllMesaagesFilter(this.filters);
	}
}
