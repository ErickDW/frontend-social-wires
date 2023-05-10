import { Component, OnInit } from '@angular/core';
import { BackService } from '../../services/back.service';
import { ILogIn, IRegister } from 'src/app/interfaces/filters.interface';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/states/app.state';
import { Router } from '@angular/router';

import { CallsBack } from 'src/app/utils/calls-back';
import { IUsersession } from 'src/app/store/states/user-session.state';
import { IError } from 'src/app/store/states/is-error.state';
import { Utils } from 'src/app/utils/utils';
@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
	callsBack: CallsBack;
	constructor(
		private backService: BackService,
		private _store: Store<IAppState>,
		private router: Router
	) {
		this.callsBack = new CallsBack(this._store, this.backService);
	}

	registerData: IRegister = {
		password: '',
		email: '',
		nickName: '',
		userName: '',
		role: 'admin',
	};

	ngOnInit(): void {}

	inputData(event: Event) {
		const dataStruc = new Utils().inputData(event, this.registerData) as IRegister;
		this.registerData = dataStruc;
	}

	onSubmit(event: Event): void {
		event.preventDefault();
		if (this.verifyData()) {
			alert('Debes llenar los campos de registro');
			return;
		}
		this.callsBack.callBackRegister(this.registerData);
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

	verifyData(): boolean {
		return (this.registerData.email === '' ||
			this.registerData.password === '' ||
			this.registerData.nickName === '' ||
			this.registerData.userName === '' ||
			this.registerData.role !== 'admin')
			? true
			: false;
	}
}
