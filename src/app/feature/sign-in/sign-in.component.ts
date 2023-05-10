import { Component, OnInit } from '@angular/core';
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
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
	callsBack: CallsBack;
	constructor(
		private backService: BackService,
		private _store: Store<IAppState>,
		private router: Router
	) {
		this.callsBack = new CallsBack(this._store, this.backService);
	}

	logInData: ILogIn = {
		password: '',
		email: '',
	};

	ngOnInit(): void {}

	inputData(event: Event) {
		const dataStruc = new Utils().inputData(event, this.logInData) as ILogIn;
		this.logInData = dataStruc;
	}

	onSubmit(event: Event): void {
		event.preventDefault();
		if (this.logInData.email === '' || this.logInData.password === '') {
			alert('Debes llenar los campos de autenticacion');
			return;
		}
		this.callsBack.callBackLogIn(this.logInData);
		this._store
			.select((state) => state.userSession)
			.subscribe((response: IUsersession | any) => {
				const r: IError = response;
				if (r.isError) {
					alert(r.moreInfo);
					return;
				} else {
					this.router.navigate(['/allmessages']);
				}
			});
	}
}
