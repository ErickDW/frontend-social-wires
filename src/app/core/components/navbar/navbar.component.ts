import { Component, OnInit } from '@angular/core';
import 'jquery';
@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
	constructor() {
		$(document).ready(function () {
			$('.profile .icon_wrap').click(function () {
				$(this).parent().toggleClass('active');
				$('.notifications').removeClass('active');
			});

			$('.notifications .icon_wrap').click(function () {
				$(this).parent().toggleClass('active');
				$('.profile').removeClass('active');
			});

			$('.close').click(function () {
				$('.popup').hide();
			});
		});
	}

	ngOnInit(): void {}
}
