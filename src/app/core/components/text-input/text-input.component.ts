import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
	selector: 'app-text-input',
	templateUrl: './text-input.component.html',
	styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnInit {
	@Input() changetype: string = 'text';
	@Input() name: string = '';
	@Input() placeholder: string = 'Pasword taco';
	@Input() search: boolean = true;
	@Output() text$ = new EventEmitter<any>();

	open: boolean = false;
	passw: boolean = false;

	constructor() {}

	ngOnInit(): void {
		if (this.changetype === 'password') {
			this.passw = true;
			this.search = false;
		}
		if (this.changetype !== 'password' && this.search) {
			this.passw = false;
		}
	}

	viewpass() {
		this.open = !this.open;
		if (this.open) {
			this.changetype = 'text';
		} else {
			this.changetype = 'password';
		}
	}

	text(event: Event): void {
		this.text$.emit(event);
	}

}
