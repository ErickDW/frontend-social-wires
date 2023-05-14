import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMesaggesComponent } from './all-mesagges.component';

describe('AllMesaggesComponent', () => {
	let component: AllMesaggesComponent;
	let fixture: ComponentFixture<AllMesaggesComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AllMesaggesComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AllMesaggesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
