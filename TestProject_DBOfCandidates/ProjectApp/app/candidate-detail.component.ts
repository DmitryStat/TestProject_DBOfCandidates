import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './data.service';
import { Candidate } from './candidate'

@Component({
    templateUrl: './candidate-detail.component.html',
    providers: [DataService]
})

export class CandidateDetailComponent implements OnInit {
    id: number;
    candidate: Candidate;
    loaded: boolean = false;

    constructor(private dataService: DataService, activeRoute: ActivatedRoute) {
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }

    ngOnInit() {
        if (this.id) {
        this.dataService.getCandidate(this.id).subscribe((data: Candidate) => {
                this.candidate = data;
                this.loaded = true;
            })
        }
    }
}