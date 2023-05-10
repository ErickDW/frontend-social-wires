import { IMessage } from './message.state';
import { IUsersession } from './user-session.state';

export interface IAppState {
	allMessages: IMessage[] | any;
	userSession: IUsersession | any;
	allMyMessages: IMessage[] | any;
}
