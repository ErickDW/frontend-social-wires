
import { AllMyMessagesActions, EAllMyMessages } from '../actions/eall-my-messages.action';
import { defaultMsg } from '../states/message.state';

export function allMyMessagesReducer(
	state = [defaultMsg],
	action: AllMyMessagesActions
) {
	switch (action.type) {
		case EAllMyMessages.LOAD_MYMESSAGES_SUCCESS: {
			return [...action.payload];
		}
		case EAllMyMessages.LOAD_MYMESSAGES_FAIL: {
			return {
				...action.payload,
			};
		}
		default:
			return state;
	}
}
