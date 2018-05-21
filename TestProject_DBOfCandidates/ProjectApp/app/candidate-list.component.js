var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Candidate } from './candidate';
var CandidateListComponent = /** @class */ (function () {
    function CandidateListComponent(dataService) {
        this.dataService = dataService;
        this.candidate = new Candidate();
        this.tableMode = true;
    }
    CandidateListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getCandidates().subscribe(function (data) { return _this.candidates = data; });
        this.loadCandidates();
    };
    CandidateListComponent.prototype.loadCandidates = function () {
        var _this = this;
        this.dataService.getCandidates().subscribe(function (data) { return _this.candidates = data; });
    };
    CandidateListComponent.prototype.save = function () {
        var _this = this;
        if (this.candidate.id == null) {
            this.dataService.createCandidate(this.candidate)
                .subscribe(function (data) {
                return _this.candidates.push(data);
            });
        }
        else {
            this.dataService.updateCandidate(this.candidate)
                .subscribe(function (data) { return _this.loadCandidates(); });
        }
        this.cancel();
    };
    CandidateListComponent.prototype.editCandidate = function (c) {
        this.candidate = c;
    };
    CandidateListComponent.prototype.cancel = function () {
        this.candidate = new Candidate();
        this.tableMode = true;
    };
    CandidateListComponent.prototype.delete = function (c) {
        var _this = this;
        this.dataService.deleteCandidate(c.id)
            .subscribe(function (data) { return _this.loadCandidates(); });
    };
    CandidateListComponent.prototype.add = function () {
        this.cancel();
        this.tableMode = false;
    };
    CandidateListComponent.prototype.addFile = function () {
    };
    CandidateListComponent.prototype.onChange = function (event) {
        console.log('onChange');
        this.files = event.srcElement.files;
        console.log(this.files);
    };
    CandidateListComponent = __decorate([
        Component({
            templateUrl: './candidate-list.component.html',
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService])
    ], CandidateListComponent);
    return CandidateListComponent;
}());
export { CandidateListComponent };
//# sourceMappingURL=candidate-list.component.js.map