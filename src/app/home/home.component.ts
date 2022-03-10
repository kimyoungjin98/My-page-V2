import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

	@ViewChild('content') content: ElementRef;

	@ViewChild('first') first: ElementRef;

	@ViewChild('second') second: ElementRef;

	constructor() { }

	async ngAfterViewInit() {
		const first = this.first.nativeElement.textContent.split('');
		const second = this.second.nativeElement.textContent.split('');


	}

}
