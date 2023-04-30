import { Component, Input, OnInit } from '@angular/core';
import { IMessage } from 'src/app/store/states/message.state';
@Component({
	selector: 'app-card-message',
	templateUrl: './card-message.component.html',
	styleUrls: ['./card-message.component.scss'],
})
export class CardMessageComponent implements OnInit {
	@Input() detal : IMessage;
	title: string = 'Titulo';
	text: string =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tempore praesentium cupiditate sequi quae sunt hic nobis. Porro earum molestias similique iusto odit, corrupti vel exercitationem libero inventore, sunt hic?';
	fecha: string = '10:25 am 20/11/23';
	user: string = 'Daniel Amadeus';

	constructor() {}

	ngOnInit(): void {
		const {title, message, fecha, user} = this.detal;
		this.title = title;
		this.text = message;
		this.fecha = fecha;
		this.user = user;
	}
}
