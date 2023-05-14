import { Action } from "@ngrx/store";

export enum ETimeConsult {
	COUNT_THE_SECONDS = "[TimeConsult] Count the seconds.",
	RESET_SECONDS = "[TimeConsult] Reset seconds.",
}

export class CountTheSeconds implements Action {
	readonly type = ETimeConsult.COUNT_THE_SECONDS;
	constructor(public payload: any) {}
}

export class ResetSeconds implements Action {
	readonly type = ETimeConsult.RESET_SECONDS;
	constructor(public payload: any) {}
}

export type TimeConsultActions =
	| CountTheSeconds
	| ResetSeconds;
