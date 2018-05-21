

export class Candidate {
    constructor(
        public id?: number,
        public fio?: string,
        public position?: string,
        public age?: number,
        public salary?: number,
        public numberOfYearsOfExperience?: number,
        public date?: string,
        public textFile?: number[],
        public resume?: any
    ) { }
}