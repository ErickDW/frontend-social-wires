import {
	CurrentAllMessagesActions,
	ECurrentAllMessages,
} from '../actions/ecurrent-all-messages.action';
import { defaultMsg } from '../states/message.state';

export function currentAllMessagesReducer(
	state = [defaultMsg],
	action: CurrentAllMessagesActions
) {
	switch (action.type) {
		case ECurrentAllMessages.LOAD_CURRENTALLMESSAGES_SUCCESS: {
			return [...action.payload];
		}
		case ECurrentAllMessages.LOAD_CURRENTALLMESSAGES_FAIL: {
			return {
				...action.payload,
			};
		}
		default:
			return state;
	}
}
