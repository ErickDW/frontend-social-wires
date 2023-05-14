import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import 'jquery';

import { BackService } from 'src/app/services/back.service';
import { CallsBack } from 'src/app/utils/calls-back';
import { IAppState } from 'src/app/store/states/app.state';
import {
	IMessage,
	INewMessages,
	defaultMsg,
} from 'src/app/store/states/message.state';

@Component({
	selector: 'app-notify',
	templateUrl: './notify.component.html',
	styleUrls: ['./notify.component.scss'],
})
export class NotifyComponent implements OnInit {
	noty: boolean = false;
	post: IMessage[] = [defaultMsg];
	titlePost: string = 'No recent post';
	private callsBack: CallsBack;

	constructor(
		private backService: BackService,
		private _store: Store<IAppState>,
		private router: Router
	) {
		this.jquery();
		this.callsBack = new CallsBack(this._store, this.backService);
	}

	ngOnInit(): void {
		setInterval(() => {
			this.jquery();
		}, 1000);
		this._store
			.select((state) => state.newMessages)
			.subscribe((response: INewMessages) => {
				if (response.newMessages) {
					this.noty = response.newMessages;
					this.titlePost = 'Recent post';
					const newMsg = response.dataMessages;
					this.post.pop();
					this.post.push(newMsg[newMsg.length - 1]);
					if (response.change > 1) {
						this.post.push(newMsg[newMsg.length - 2]);
					}
					this.jquery();
				} else {
					this.noty = false;
					this.titlePost = 'No recent post';
					this.post = [defaultMsg];
					this.jquery();
				}
			});
	}

	jquery() {
		$(document).ready(function () {
			$('.notifications .icon_wrap').click(function () {
				$(this).parent().toggleClass('active');
				$('.profile').removeClass('active');
			});
		});
	}
}
