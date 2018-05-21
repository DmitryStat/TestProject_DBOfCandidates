import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Candidate } from './candidate';

@Component({
    templateUrl: './candidate-list.component.html',
    providers: [DataService]
})

export class CandidateListComponent {
    candidate: Candidate = new Candidate();
    candidates: Candidate[];
    tableMode: boolean = true;

    files: any;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getCandidates().subscribe((data: Candidate[]) => this.candidates = data);
        this.loadCandidates();
    }

    loadCandidates() {
        this.dataService.getCandidates().subscribe((data: Candidate[]) => this.candidates = data);
    }

    save() {


        if (this.candidate.id == null) {
            this.dataService.createCandidate(this.candidate)
                .subscribe((data: Candidate) =>
                    this.candidates.push(data));
        } else {
            this.dataService.updateCandidate(this.candidate)
                .subscribe(data => this.loadCandidates());
        }
        this.cancel();
    }

    editCandidate(c: Candidate) {
        this.candidate = c;
    }

    cancel() {
        this.candidate = new Candidate();
        this.tableMode = true;
    }

    delete(c: Candidate) {
        this.dataService.deleteCandidate(c.id)
            .subscribe(data => this.loadCandidates());
    }

    add() {
        this.cancel();
        this.tableMode = false;
    }

    addFile() {

    }

    onChange(event: any) {
        console.log('onChange');
        this.files = event.srcElement.files;
        console.log(this.files);
        
        
    }
}