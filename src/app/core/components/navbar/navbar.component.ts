import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import 'jquery';

import { BackService } from 'src/app/services/back.service';
import { IAppState } from 'src/app/store/states/app.state';
import { LoadUserSessionSuccess } from 'src/app/store/actions/euser-session.action';
import { defaultUsersession } from 'src/app/store/states/user-session.state';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
	constructor(
		private backService: BackService,
		private _store: Store<IAppState>,
		private router: Router
	) {
		this.jquery();
	}

	ngOnInit(): void {}

	logout() {
		const jwt = sessionStorage.getItem('jwt');
		if (jwt) {
			sessionStorage.removeItem('jwt');
			this._store.dispatch(new LoadUserSessionSuccess(defaultUsersession));
			this.router.navigate(['/']);
		}
	}

	jquery() {
		$(document).ready(function () {
			$('.profile .icon_wrap').click(function () {
				$(this).parent().toggleClass('active');
				$('.notifications').removeClass('active');
			});
		});
	}
}
