import { Sort } from "./sort";

export class Pageable {
    constructor(
        public sort:Sort,
        public offset:number,
        public pageSize:number,
        public pageNumbe:number,
        public paged:boolean,
        public unpaged:boolean
    ){}
}
