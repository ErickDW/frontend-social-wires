import {
	AllMessagesActions,
	EAllMessages,
} from '../actions/eall-messages.action';
import { defaultMsg } from '../states/message.state';

export function allMessagesReducer(
	state = [defaultMsg],
	action: AllMessagesActions
) {
	switch (action.type) {
		case EAllMessages.LOAD_ALLMESSAGES_SUCCESS: {
			return [...action.payload];
		}
		case EAllMessages.LOAD_ALLMESSAGES_FAIL: {
			return {
				...action.payload,
			};
		}
		default:
			return state;
	}
}
