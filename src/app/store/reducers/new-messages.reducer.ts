import {
	ENewMessages,
	NewMessagesActions,
} from '../actions/enew-messages.action';
import { defaultNewMsg } from '../states/message.state';

export function newMessagesReducer(
	state = defaultNewMsg,
	action: NewMessagesActions
) {
	switch (action.type) {
		case ENewMessages.LOAD_NEWMESSAGES_TRUE: {
			return { ...state, ...action.payload };
		}
		case ENewMessages.LOAD_NEWMESSAGES_FALSE: {
			return { ...state, ...action.payload };
		}
		default:
			return state;
	}
}
