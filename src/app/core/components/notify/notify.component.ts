import { Component, Input, OnInit } from '@angular/core';
import 'jquery';
import { AppComponent } from '../../../app.component';

@Component({
	selector: 'app-notify',
	templateUrl: './notify.component.html',
	styleUrls: ['./notify.component.scss'],
})
export class NotifyComponent implements OnInit {
	@Input() noty: boolean = false;
	constructor() {
		$(document).ready(function () {
			$('.notifications .icon_wrap').click(function () {
				$(this).parent().toggleClass('active');
				$('.profile').removeClass('active');
			});
		});
	}

	ngOnInit(): void {}
}
