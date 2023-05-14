import { Action } from '@ngrx/store';
import { INewMessages } from '../states/message.state';

export enum ENewMessages {
	LOAD_NEWMESSAGES_TRUE = '[NewMessages] get NewMessages True',
	LOAD_NEWMESSAGES_FALSE = '[NewMessages] get NewMessages False',
}

export class LoadNewMessagesTrue implements Action {
	readonly type = ENewMessages.LOAD_NEWMESSAGES_TRUE;
	constructor(public payload: INewMessages) {}
}

export class LoadNewMessagesFalse implements Action {
	readonly type = ENewMessages.LOAD_NEWMESSAGES_FALSE;
	constructor(public payload: INewMessages) {}
}

export type NewMessagesActions = LoadNewMessagesTrue | LoadNewMessagesFalse;
