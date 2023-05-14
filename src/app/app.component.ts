import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { CallsBack } from './utils/calls-back';
import { BackService } from 'src/app/services/back.service';
import { IAppState } from 'src/app/store/states/app.state';
import {
	CountTheSeconds,
	ResetSeconds,
} from './store/actions/etime-consult.action';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'Soscial Wires';

	timeoutHandle: any;

	private callsBack: CallsBack;

	constructor(
		private backService: BackService,
		private _store: Store<IAppState>
	) {
		this.callsBack = new CallsBack(this._store, this.backService);
	}

	ngOnInit(): void {
		scrollTo(0, 0);
		this.startTime();
		this.timeConsult();
	}

	startTime() {
		let count: number = 0;
		const THAT = this;
		const MIL: number = 1000;
		THAT.timeoutHandle = setInterval(function () {
			count++;
			THAT._store.dispatch(new CountTheSeconds(count));
		}, MIL);
	}

	timeConsult() {
		const SECONDS_CONSULT: number = 5;
		const RESET: number = 15;

		this._store
			.select((state) => state.timeConsult)
			.subscribe((response) => {
				if (response.countSeconds === SECONDS_CONSULT) {
					this.callsBack.callBackAllNewMessages();
				}
				if (response.countSeconds === RESET) {
					this.resetTimeConsult();
				}
			});
	}

	resetTimeConsult() {
		clearInterval(this.timeoutHandle);
		this._store.dispatch(new ResetSeconds(0));
		this.startTime();
	}
}
