import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Blogpost } from '../Modules/Blogpost';

@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.css']
})
export class BlogformComponent implements OnInit {
  formInstance: FormGroup;
  constructor(public dialogRef: MatDialogRef<BlogformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Blogpost) {
    this.formInstance = new FormGroup({
      "title": new FormControl('', Validators.required),
      "application_id": new FormControl('', Validators.required),
      "blogpost_code": new FormControl('', Validators.required),
      "company_email": new FormControl('', Validators.required),
      "subtitle": new FormControl('', Validators.required),
      "image": new FormControl('', Validators.required),
      "small_image": new FormControl('', Validators.required),
      "content": new FormControl('', Validators.required),
      "create_on": new FormControl('', Validators.required),
    });
   
    this.formInstance.patchValue({
      title: data.title,
      application_id:data.BlogPostsKey.application_id,
      blogpost_code:data.BlogPostsKey.blogpost_code,
      company_email:data.BlogPostsKey.company_email,
      subtitle:data.subtitle,
      image:data.image,
      small_image:data.small_image,
      content:data.content,
      create_on:data.create_on
    });
  }
  ngOnInit(): void {
  }
  save(): void {
    this.dialogRef.close(Object.assign(new Blogpost(), this.formInstance.value));
  }
}
