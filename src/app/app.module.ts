import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { SkillsModule } from './skills/skills.module';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
	declarations: [
		AppComponent,
		ProjectComponent,
		ContactComponent,
		AboutComponent,
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		ScrollingModule,
		SkillsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
