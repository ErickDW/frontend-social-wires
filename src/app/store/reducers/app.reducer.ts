import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../states/app.state';
import { allMessagesReducer } from './all-messages.reducer';
import { userSessionReducer } from './user-session.reducer';
import { allMyMessagesReducer } from './all-my-messages.reducer';
import { TimeConsultReducer } from './time-consult.reducer';
import { newMessagesReducer } from './new-messages.reducer';
import { currentAllMessagesReducer } from './current-all-messages.reducer';

export const appReducer: ActionReducerMap<IAppState, any> = {
	allMessages: allMessagesReducer,
	userSession: userSessionReducer,
	allMyMessages: allMyMessagesReducer,
	timeConsult: TimeConsultReducer,
	newMessages: newMessagesReducer,
	currentAllMessages: currentAllMessagesReducer
};
