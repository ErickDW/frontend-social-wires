import { Action } from '@ngrx/store';
import { IMessage } from '../states/message.state';
import { IError } from '../states/is-error.state';

export enum EAllMessages {
	LOAD_ALLMESSAGES_SUCCESS = '[AllMessages] get AllMessages Success',
	LOAD_ALLMESSAGES_FAIL = '[AllMessages] get AllMessages Failed',
}

export class LoadAllMessagesSuccess implements Action {
	readonly type = EAllMessages.LOAD_ALLMESSAGES_SUCCESS;
	constructor(public payload: IMessage[] | any) {}
}

export class LoadAllMessagesFailed implements Action {
	readonly type = EAllMessages.LOAD_ALLMESSAGES_FAIL;
	constructor(public payload: IError | any) {}
}

export type AllMessagesActions = LoadAllMessagesSuccess | LoadAllMessagesFailed;
