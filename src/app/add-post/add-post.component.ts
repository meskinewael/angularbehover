import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {BlogService} from '../blog.service';
import { UUID } from 'angular2-uuid';
import { WarningNotificationService } from '../warning-notification.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  addPost : FormGroup;
  submitted = false;
  constructor(private FormBuilder:FormBuilder , private blogService:BlogService,private warning: WarningNotificationService) { }
  
  ngOnInit(): void {
    this.addPost= this.FormBuilder.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      image: ['', Validators.required],
      small_image: ['', Validators.required],
      create_on: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  get f(){return this.addPost.controls;}

  onSubmit() {
      this.submitted = true;
      if(this.addPost.invalid){
      this.warning.error('Veuillez vérifier les champs du formulaire');
        return;
      }
      const premKey =this.genkey();
      const formData = this.addPost.value;
      formData.blogpost_code = premKey[0],
      formData.application_id = premKey[1],
      formData.company_email=premKey[2]
      this.blogService.createBlogpost(formData)
        .subscribe(data => this.Success(data), error => this.Error(error));
      this.warning.success('votre article a été ajouté avec succès');
      this.submitted = false;
      this.addPost.reset();
  }
    

  Success(data){
    console.log('addPost ', data);
    
  }
  
  Error(error) {
    console.log('erreur ', error);
  }

  public genkey() {
    let list:string[]=[];
    let uuid = UUID.UUID();
    for(let i=0;i<=2;i++){
    
    list.push(uuid);
    
    }
    return list;
  }
 
}
