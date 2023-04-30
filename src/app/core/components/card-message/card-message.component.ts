import { Component, OnInit } from '@angular/core';
//! Falta logica de padre a hijo
//!FALTATERMINAR
@Component({
	selector: 'app-card-message',
	templateUrl: './card-message.component.html',
	styleUrls: ['./card-message.component.scss'],
})
export class CardMessageComponent implements OnInit {
	title: string = 'Titulo';
	text: string =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tempore praesentium cupiditate sequi quae sunt hic nobis. Porro earum molestias similique iusto odit, corrupti vel exercitationem libero inventore, sunt hic?';
	fecha: string = '10:25 am 20/11/23 fecha';
	user: string = 'Daniel Amadeus';

	constructor() {}

	ngOnInit(): void {}
}
