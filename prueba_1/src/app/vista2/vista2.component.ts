import { Component, OnInit } from '@angular/core';
import { ColumnType } from 'igniteui-angular';
import { Employee, employeesData } from './localData';

@Component({
  selector: 'app-vista2',
  templateUrl: './vista2.component.html',
  styleUrls: ['./vista2.component.scss']
})
export class Vista2Component implements OnInit {
  public localData: Employee[] = [];
  title = 'vista2';

  ngOnInit(): void {
    this.localData = employeesData;
  }

  public onColumnInit(column: ColumnType): void {
    if (column.field === 'RegistererDate') {
      column.formatter = (date => date.toLocaleDateString());
    }
  }
}
