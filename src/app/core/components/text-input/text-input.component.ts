import { Component, Input, OnInit } from '@angular/core';
//! Falta logica del componente hijo para comunicarse con el padre
//!FALTATERMINAR
@Component({
	selector: 'app-text-input',
	templateUrl: './text-input.component.html',
	styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnInit {

	@Input() changetype: string = 'text';
	@Input() placeholder: string = 'Pasword taco'
	@Input() search : boolean = true;

	open: boolean = false;
	passw: boolean = false;

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
