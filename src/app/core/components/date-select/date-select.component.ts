import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Utils } from 'src/app/utils/utils';
@Component({
	selector: 'app-date-select',
	templateUrl: './date-select.component.html',
	styleUrls: ['./date-select.component.scss'],
})
export class DateSelectComponent implements OnInit {
	@Output() date$ = new EventEmitter<any>();
	@Input() days: string[];
	constructor() {
	}

	ngOnInit(): void {
		this.query();
	}

	query() {
		const selected = document.querySelector('.selected');
		const optionsContainer = document.querySelector('.options-container');

		const optionsList = document.querySelectorAll('.option');

		const sle = document.querySelector('.index');
		sle.classList.toggle('none');
		selected.addEventListener('click', () => {
			sle.classList.toggle('none');
			if (selected.innerHTML.length > 11) {
				sle.classList.remove('none');
			}
			optionsContainer.classList.toggle('active');
		});

		optionsList.forEach((o) => {
			o.addEventListener('click', () => {
				optionsContainer.classList.remove('active');
				selected.innerHTML = o.querySelector('label').innerHTML;
			});
		});
	}

	selection(dat: string) {
		const search = new Utils().reverseStringDate(dat);
		this.date$.emit(search);
	}
}
