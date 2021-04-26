import { Component, OnInit, Inject } from '@angular/core';
import { Articles} from '../Modules/Articles';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-show-article',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.css']
})
export class ShowArticleComponent implements OnInit {
  formInstance: FormGroup;
  constructor(public dialogRef: MatDialogRef<ShowArticleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Articles) {
    this.formInstance = new FormGroup({
      "titre": new FormControl('', Validators.required),
      "contenu": new FormControl('', Validators.required),
      "auteur": new FormControl('', Validators.required),
      "date": new FormControl('', Validators.required),
    });

    this.formInstance.setValue(data);
  }


  ngOnInit(): void {
  }

}
