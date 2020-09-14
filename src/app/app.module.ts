import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { appRoutingModule } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetalhesComponent } from './detalhes/detalhes.component';

import { SliderModule } from 'angular-image-slider';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HeaderComponent,
		DetalhesComponent
	],
	imports: [
		appRoutingModule,
		MatIconModule,
		BrowserModule,
		FormsModule,
		SliderModule,
		MatCheckboxModule,
		MatBadgeModule,
		HttpClientModule,
		MatSelectModule,
		MatButtonModule,

		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
