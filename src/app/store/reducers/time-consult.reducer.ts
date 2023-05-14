import { ETimeConsult, TimeConsultActions } from "../actions/etime-consult.action";
import { initialStateTimeConsult } from "../states/time-consult.state";


export function TimeConsultReducer(
	state = initialStateTimeConsult,
	action: TimeConsultActions
) {
	switch (action.type) {
		case ETimeConsult.COUNT_THE_SECONDS:
			return {
				...state,
				countSeconds: action.payload
			};

		case ETimeConsult.RESET_SECONDS:
			return {
				...state,
				countSeconds: action.payload
			};

		default:
			return state;
	}
}
