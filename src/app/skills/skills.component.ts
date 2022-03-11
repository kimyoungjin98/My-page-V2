import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterViewInit {

	@ViewChild('skills') skills: ElementRef;

	@Output() position = new EventEmitter<[number, number]>();

	constructor() { }

	ngAfterViewInit(): void {
		this.position.emit(this.skills.nativeElement.offsetTop);
	}

}
