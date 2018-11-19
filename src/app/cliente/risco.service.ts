import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RiscoDto } from "./riscoDto";

const API_LIST = "http://localhost:8080/api/riscos";

@Injectable({providedIn: 'root'})
export class RiscoService{
    constructor(private http:HttpClient){}

    list(){
        return this.http.get<RiscoDto[]>(API_LIST);
    }
}