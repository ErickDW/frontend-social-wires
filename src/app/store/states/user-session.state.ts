export interface IUsersession {
	jwt: string;
	nick: string;
	role: string;
}

export const defaultUsersession: IUsersession = {
	jwt: '',
	nick: '',
	role: '',
};
