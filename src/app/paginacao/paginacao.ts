
import { Sort } from "./sort";
import { Pageable } from "./pageable";


export class Paginacao {
    constructor(
        public content:Object[],
        public pageable:Pageable,
        public last: boolean,
        public totalElements:number,
        public totalPages:number,
        public size:number,
        public number:number,
        public sort:Sort,
        public numberOfElements:number,
        public first:boolean,
        public empty:boolean
    ){}
}
