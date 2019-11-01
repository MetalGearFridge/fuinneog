import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Employee } from '../employee';
import { SwitchboardService } from '../switchboard.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'win-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {
    switchboard: SwitchboardService;

    @Input() employee: Employee;
    constructor(switchboard: SwitchboardService) {
        this.switchboard = switchboard;
    }  
    subEmployee: Subscription;
    ngOnInit(): void {
        this.subEmployee = this.switchboard.employee$.subscribe((c) => {
            this.employee = c;
        })
    }

    ngOnDestroy(): void {
        this.subEmployee.unsubscribe();
    }

}
