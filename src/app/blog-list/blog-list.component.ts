import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BlogService} from '../blog.service';
import { Blogpost } from '../Modules/Blogpost';
import { MatDialog } from '@angular/material/dialog';
import { BlogformComponent } from '../blogform/blogform.component';
import { RemoveFormComponent } from '../remove-form/remove-form.component';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  dataSource;
  constructor(private BlogService: BlogService,public dialog: MatDialog) { }
  displayedColumns: string[] = ['title', 'subtitle', 'image', 'small_image', 'content','create_on','action'];

  ngOnInit(): void {
   this.BlogService.getBlogpost().subscribe(data=>{
    console.log(data);
    this.dataSource = new MatTableDataSource(data);
   });
  }

// edit data from data base 
  edit(data: Blogpost) {
    console.log('ser',data);
    const dialogRef = this.dialog.open(BlogformComponent, {
      width: '400px',
      data: data
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        
      this.BlogService.updateBlogpost(result).subscribe(data => {
       this.Success()
      },error => console.error(error));
      }
      
    });
  }
  


  delete(data: Blogpost) {
    console.log('rd',data);
    const dialogRef = this.dialog.open(RemoveFormComponent, {
      width: '400px',
      data: data
      
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
       this.BlogService.deleteBlogpost(data._id).subscribe(data=>{
        this.Success()
       },error => console.error(error))      }
    });
  }
  Success(){
    this.BlogService.getBlogpost().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
      console.log('data ', data);
    })
  }

}
