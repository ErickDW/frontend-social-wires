export interface IMessage {
	title: string;
	message: string;
	date: string;
	nick: string;
}

export interface IMessageRes {
	not: string;
	dat: IMessage;
}

export interface INewMessages {
	newMessages: boolean;
	dataMessages?: IMessage[];
	change?: number;
}

export const defaultMsg: IMessage = {
	title: '',
	message: '',
	date: '',
	nick: '',
};

export const defaultMsgArray: IMessage[] = [
	{
		title: 'Soy un titulo',
		message: 'Soy un texto o un mensaje',
		date: '10:25 am 20/11/23',
		nick: 'Nombre Usuario',
	},
	{
		title: 'Soy un titulo 2',
		message: 'Soy un texto o un mensaje',
		date: '10:25 am 20/11/23',
		nick: 'Nombre Usuario',
	},
	{
		title: 'Soy un titulo 3',
		message: 'Soy un texto o un mensaje',
		date: '10:25 am 20/11/23',
		nick: 'Nombre Usuario',
	},
	{
		title: 'Soy un titulo 4',
		message: 'Soy un texto o un mensaje',
		date: '10:25 am 20/11/23',
		nick: 'Nombre Usuario',
	},
	{
		title: 'Soy un titulo 5',
		message: 'Soy un texto o un mensaje',
		date: '10:25 am 20/11/23',
		nick: 'Nombre Usuario',
	},
	{
		title: 'Soy un titulo 6',
		message: 'Soy un texto o un mensaje',
		date: '10:25 am 20/11/23',
		nick: 'Nombre Usuario',
	},
];

export const defaultNewMsg: INewMessages = {
	newMessages: false,
};
