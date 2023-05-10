import { Component, OnInit } from '@angular/core';
import { CallsBack } from './utils/calls-back';
import { BackService } from 'src/app/services/back.service';
import { IAppState } from 'src/app/store/states/app.state';
import { Store } from '@ngrx/store';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'Soscial Wires';

	private callsBack: CallsBack;

	constructor(
		private backService: BackService,
		private _store: Store<IAppState>
	) {
		this.callsBack = new CallsBack(this._store, this.backService);
	}

	ngOnInit(): void {
		this.newMessages();
	}

	newMessages(){
		setTimeout(() =>{

			this.newMessages();
		}, 2000)
	}
}
