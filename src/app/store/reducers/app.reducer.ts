import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../states/app.state';
import { allMessagesReducer } from './all-messages.reducer';
import { userSessionReducer } from './user-session.reducer';

export const appReducer: ActionReducerMap<IAppState, any> = {
	allMessages: allMessagesReducer,
	userSession: userSessionReducer
};
