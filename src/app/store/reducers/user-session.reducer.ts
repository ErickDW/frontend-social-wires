import {
	EUserSession,
	UserSessionActions,
} from '../actions/euser-session.action';
import { defaultUsersession } from '../states/user-session.state';

export function userSessionReducer(
	state = defaultUsersession,
	action: UserSessionActions
) {
	switch (action.type) {
		case EUserSession.LOAD_USERSESSION_SUCCESS: {
			return {
				...action.payload,
			};
		}
		case EUserSession.LOAD_USERSESSION_FAIL: {
			return {
				...action.payload,
			};
		}
		default:
			return state;
	}
}
