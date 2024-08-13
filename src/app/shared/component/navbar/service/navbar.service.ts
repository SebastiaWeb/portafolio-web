import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NavbarService {
    
    private offsetTops:any;
    private target = new BehaviorSubject<any>({
        'hola': 'Hola mundo'
    });

    
    constructor() { }
    
    
    public setTargetHTML(target: any): void {
        this.target.next(target);
    }
    public getTargetHTML = this.target.asObservable();
    setOffsetTops(value:any){
        this.offsetTops = value;
    }   
    
    getOffsetTops(){
        return (this.offsetTops != null) ? this.offsetTops:'Vacio';
    }

}