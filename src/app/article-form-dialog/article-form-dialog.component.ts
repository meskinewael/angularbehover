import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Articles} from '../Modules/Articles';
@Component({
  selector: 'app-article-form-dialog',
  templateUrl: './article-form-dialog.component.html',
  styleUrls: ['./article-form-dialog.component.css']
})
export class ArticleFormDialogComponent implements OnInit {
  formInstance: FormGroup;
 
  constructor(public dialogRef: MatDialogRef<ArticleFormDialogComponent>,
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
  save(): void {
    this.dialogRef.close(Object.assign(new Articles(), this.formInstance.value));
  }
}
