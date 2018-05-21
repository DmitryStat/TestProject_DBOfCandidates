import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { CandidateListComponent } from './candidate-list.component';
import { CandidateDetailComponent } from './candidate-detail.component';

const appRoutes: Routes = [
    { path: '', component: CandidateListComponent },
    { path: 'candidate/:id', component: CandidateDetailComponent },
    { path: '**', redirectTo: '/' }
]

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, CandidateListComponent, CandidateDetailComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }