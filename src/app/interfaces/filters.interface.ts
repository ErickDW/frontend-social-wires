export interface IFilters {
	nick: string;
	title: string;
	day: string;
}

export interface IJwtInfo {
	role: string;
	nick: string;
}

export interface ILogIn {
	email: string;
	password: string;
}

export interface IUserCheck {
	message: string;
	jwt: string;
}
