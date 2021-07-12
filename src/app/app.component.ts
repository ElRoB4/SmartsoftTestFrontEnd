import { Component , OnInit} from '@angular/core';
import { TablasInfoService } from "./services/tablas-info.service";
import { Tablas } from './interfaces/tablas'
import { TablasService } from './services/tablas.service';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
  template: `
    <kendo-dropdownlist 
    [data]="tablas"
    [textField]="'Name'"
    [valueField]="'Id'" 
    [defaultItem]="placeHolder" 
      [filterable]="true"
      (valueChange)="valueChange($event)"
      (selectionChange)="selectionChange($event)"
      
  
    >    
    </kendo-dropdownlist>
    <app-tablas title="Event log" [events]="events">
    </app-tablas>
  ` ,
  providers: [TablasService],
})

                  
                    
export class AppComponent implements OnInit  {
  title = 'SmartsoftTestFrontEnd';
  public events: string[] = [];
  //public source: Array<string>= ['Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan'];
  //public data:   Array<string>;


  public placeHolder: Tablas={
    Name: 'Tabla 1',
    Id: 1
  } ;
  public tablas: Array<Tablas>=[];

  
 
  
  //public tablas: Tablas[];

  constructor(private tablasService:TablasInfoService ) {
      
  }

  ngOnInit() {
  //  this.data =  this.source.slice();

  //this.tablasService.getTablass().subscribe((data) => (this.tablas = data));
    this.getTablas();
    

  }

 public getTablas(): void {
    this.tablasService.getTablass()
      .subscribe(
        res => this.tablas = res,
        err => console.log(err)
      )
  }


  public valueChange(value: any): void {
      this.log('valueChange', value); 
         
     
  }

  public selectionChange(value: any): void {
    
      this.log('selectionChange', value);
     
  }
  
 


  private log(event: string, arg: any): void {
      this.events.push(`${event} ${arg || ''}`);
  }


}
