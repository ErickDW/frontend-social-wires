export interface IError {
	messageError: any;
	isError: boolean;
	moreInfo?: string;
}

export const defaultError: IError = {
	messageError: { eror: 'Error' },
	isError: true,
};
