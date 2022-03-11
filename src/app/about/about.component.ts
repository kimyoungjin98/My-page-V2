import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {

	@ViewChild('about') about: ElementRef;

	@Output() position = new EventEmitter<[number, number]>();

	constructor() { }

	ngAfterViewInit(): void {
		this.position.emit(this.about.nativeElement.offsetTop);
	}

}
