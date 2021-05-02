import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BlogService} from '../blog.service';
@Component({
  selector: 'app-dynamique-data-table',
  templateUrl: './dynamique-data-table.component.html',
  styleUrls: ['./dynamique-data-table.component.css']
})
export class DynamiqueDataTableComponent implements OnInit {

  constructor(private Blogpost:BlogService) { }
  dataSource;
  public Displaycolumns: string[] = [];
 
  ngOnInit(): void {
    this.Blogpost.getBlogpost().subscribe(data=>{
      
    this.dataSource = new MatTableDataSource(data);
    });
   }
}
