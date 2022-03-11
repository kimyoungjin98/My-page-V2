import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {

	@ViewChild('contact') contact: ElementRef;

	@Output() position = new EventEmitter<[number, number]>();

	constructor() { }

	ngAfterViewInit(): void {
		this.position.emit(this.contact.nativeElement.offsetTop);
	}

}
