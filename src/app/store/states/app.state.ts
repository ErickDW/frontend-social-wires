import { IMessage, INewMessages } from './message.state';
import { ITimeConsult } from './time-consult.state';
import { IUsersession } from './user-session.state';

export interface IAppState {
	allMessages: IMessage[] | any;
	userSession: IUsersession | any;
	allMyMessages: IMessage[] | any;
	timeConsult: ITimeConsult | any;
	newMessages: INewMessages;
	currentAllMessages: IMessage[];
}
