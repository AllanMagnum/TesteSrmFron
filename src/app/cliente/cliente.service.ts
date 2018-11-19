import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { Cliente } from "../cliente/cliente";
import { Paginacao } from "../paginacao/paginacao";

const API_FIND = "http://localhost:8080/api/cliente/${id}";
const API_LIST = "http://localhost:8080/api/clientes";
const API_SAVE = "http://localhost:8080/api/cliente/save";
const API_DELETE = "http://localhost:8080/api/cliente/delete";

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
}

@Injectable({providedIn: 'root'})
export class ClienteService{
    
    emitirClienteCriado = new EventEmitter<Cliente>();

    constructor(private http:HttpClient){}

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          console.error('An error occurred:', error.error.message);
        } else {
          console.error(
            'Backend returned code ${error.status}, ' +
            'body was: ${error.error}');
        }
        return throwError(
          'Something bad happened; please try again later.');
    };

    list(){
        return this.http.get<Paginacao>(API_LIST);
    }

    save(cliente:Cliente): Observable<Cliente> {
        return this.http.post<Cliente>(API_SAVE, cliente, httpOptions)
        .pipe(
            catchError(this.handleError)
        );
    }

    delete (id: number): Observable<{}> {
        return this.http.delete(`${API_DELETE}/${id}`, httpOptions)
          .pipe(
            catchError(this.handleError)
          );
    }

    addCliente(cliente:Cliente){
        this.emitirClienteCriado.emit(cliente);
    }

}