export class Utils {

	reverseStringDate(cadena: string): string {
		const separarCadena = cadena.split('-');
		const invertirCadena = separarCadena.reverse();
		const unirCadenaInvertida = invertirCadena.join('-');
		return unirCadenaInvertida;
	}

	changeDateFormat(date: string) : string{
		// const day = new Date(date)
		// console.log('day: ', day.toLocaleTimeString('en-US'))
		const separarCadena = date.split('T');
		return this.reverseStringDate(separarCadena[0]);
	}
	//console.log('oe', payload.date.toLocaleTimeString('en-US'));
}
