import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements AfterViewInit {

	@ViewChild('project') project: ElementRef;

	@Output() position = new EventEmitter<[number, number]>();

	constructor() { }

	ngAfterViewInit(): void {
		this.position.emit(this.project.nativeElement.offsetTop);
	}

}
