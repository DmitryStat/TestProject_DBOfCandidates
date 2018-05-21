import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidate } from './candidate';

@Injectable()
export class DataService {

    private url = "/api/candidates";

    constructor(private http: HttpClient) {
    }

    getCandidates() {
        return this.http.get(this.url);
    }

    getCandidate(id: number) {
        return this.http.get(this.url + '/' + id);
    }

    createCandidate(candidate: Candidate) {
        return this.http.post(this.url, candidate);
    }
    updateCandidate(candidate: Candidate) {

        return this.http.put(this.url + '/' + candidate.id, candidate);
    }
    deleteCandidate(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
    
}