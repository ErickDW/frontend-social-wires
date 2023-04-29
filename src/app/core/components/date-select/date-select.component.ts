import { Component, OnInit } from '@angular/core';
//! Falta logica del componente hijo para comunicarse con el padre
//!FALTATERMINAR
@Component({
	selector: 'app-date-select',
	templateUrl: './date-select.component.html',
	styleUrls: ['./date-select.component.scss'],
})
export class DateSelectComponent implements OnInit {
	constructor() {
	}

	ngOnInit(): void {
		const selected = document.querySelector('.selected');
		const optionsContainer = document.querySelector('.options-container');

		const optionsList = document.querySelectorAll('.option');

		selected.addEventListener('click', () => {
			optionsContainer.classList.toggle('active');
		});

		optionsList.forEach((o) => {
			o.addEventListener('click', () => {
				selected.innerHTML = o.querySelector('label').innerHTML;
				optionsContainer.classList.remove('active');
			});
		});
	}
}
