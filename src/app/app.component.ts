import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	@ViewChild('topmenu') topmenu: ElementRef;

	@HostListener('window:scroll', ['$event']) onScrollEvent(event: any) {
		this.isScroll = true;
		if (this.isScroll) {
			if (window.scrollY === 0) {
				this.topmenu.nativeElement.style.backgroundColor = 'white'
				this.topmenu.nativeElement.style.color = 'rgba(129, 140, 248)'
				this.topmenu.nativeElement.style.transition = '0.5 ease'
			} else {
				this.topmenu.nativeElement.style.backgroundColor = 'rgba(129, 140, 248)'
				this.topmenu.nativeElement.style.color = 'white'
				this.topmenu.nativeElement.style.transition = '0.5 ease'
			}
		}
		this.isScroll = false;
	}

	aboutPosition: number;
	skillsPosition: number;
	projectPosition: number;
	contactPosition: number;

	isScroll: boolean = false;

	constructor(
		private scroller: ViewportScroller,
	) { }

	ngOnInit(): void {

	}

	handleMenuClick(menu: string) {
		switch (menu) {
			case 'about':
				this.scroller.scrollToPosition([0, 0]);
				break;
			case 'skills':
				this.scroller.scrollToPosition([0, this.skillsPosition - 20]);
				break;
			case 'project':
				this.scroller.scrollToPosition([0, this.projectPosition]);
				break;
			case 'contact':
				this.scroller.scrollToPosition([0, this.contactPosition]);
				break;
		}
	}

	getAboutPosition(event: any) {
		this.aboutPosition = event;
	}

	getProjectPosition(event: any) {
		this.projectPosition = event;
	}

	getContactPosition(event: any) {
		this.contactPosition = event;
	}

	getSkillsPosition(event: any) {
		this.skillsPosition = event;
	}

}
