import { Component, OnInit } from '@angular/core';
//! Falta logica del componente hijo para comunicarse con el padre
//!FALTATERMINAR
@Component({
	selector: 'app-text-input',
	templateUrl: './text-input.component.html',
	styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnInit {
	open: boolean = false;
	changetype: string = 'text';
	placeholder: string = 'Pasword taco'
	passw: boolean = false;
	search : boolean = true;

	constructor() {}

	ngOnInit(): void {
		if(this.changetype === 'password'){
			this.passw = true;
			this.search = false;
		}
		if(this.changetype !== 'password' && this.search){
			this.passw = false;
		}
	}

	viewpass() {
		this.open = !this.open;
		if(this.open){
			this.changetype = 'text';
		}else{
			this.changetype = 'password';
		}
	}
}
