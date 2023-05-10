import { ILogIn, IRegister } from '../interfaces/filters.interface';
import { IMessage } from '../store/states/message.state';

export class Utils {
	reverseStringDate(cadena: string): string {
		const separarCadena = cadena.split('-');
		const invertirCadena = separarCadena.reverse();
		const unirCadenaInvertida = invertirCadena.join('-');
		return unirCadenaInvertida;
	}

	reverseStringDateNorm(cadena: string){
		const separarCadena = cadena.split('-');
		let invertirCadena = separarCadena.reverse();
		let year = invertirCadena[2].split('');
		invertirCadena[2] = year[2] + year[3];
		const unirCadenaInvertida = invertirCadena.join('/');
		return unirCadenaInvertida;
	}

	changeDateFormat(date: string, opt: number = 1) {
		const separarCadena = date.split('T');
		if(opt === 2){
			return this.reverseStringDateNorm(separarCadena[0]);
		}
		return this.reverseStringDate(separarCadena[0]);
	}

	changeDateFormatComplete(date: string) : string{
		if(date === ''){
			return '';
		}
		const day = new Date(date)
		const hour =  day.toLocaleTimeString('en-US').toLowerCase();
		const dat = this.changeDateFormat(date, 2);
		return `${hour} ${dat}`;
	}

	inputData(
		event: Event,
		dataStructure: any,
		points?: boolean
	): IMessage | ILogIn | IRegister {
		const element = event.currentTarget as HTMLInputElement;
		let tex = element.value;
		if (points) {
			tex = this.threePoints(element.value);
		}
		dataStructure = {
			...dataStructure,
			[element.title]: tex,
		};
		return dataStructure;
	}

	threePoints(text: string): string {
		return text === '' ? '...' : text;
	}
}
