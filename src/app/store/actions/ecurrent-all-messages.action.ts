import { Action } from '@ngrx/store';
import { IMessage } from '../states/message.state';
import { IError } from '../states/is-error.state';

export enum ECurrentAllMessages {
	LOAD_CURRENTALLMESSAGES_SUCCESS = '[CurrentAllMessages] get AllMessages Success',
	LOAD_CURRENTALLMESSAGES_FAIL = '[CurrentAllMessages] get AllMessages Failed',
}

export class LoadCurrentAllMessagesSuccess implements Action {
	readonly type = ECurrentAllMessages.LOAD_CURRENTALLMESSAGES_SUCCESS;
	constructor(public payload: IMessage[] | any) {}
}

export class LoadCurrentAllMessagesFailed implements Action {
	readonly type = ECurrentAllMessages.LOAD_CURRENTALLMESSAGES_FAIL;
	constructor(public payload: IError | any) {}
}

export type CurrentAllMessagesActions = LoadCurrentAllMessagesSuccess | LoadCurrentAllMessagesFailed;
