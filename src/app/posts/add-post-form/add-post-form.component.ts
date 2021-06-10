import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, NgModel } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Post } from 'src/app/models/post';
import { HttpPostsService } from 'src/app/posts/http-posts.service';
import { AddPostConfirmComponent } from './add-post-confirm/add-post-confirm.component';

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrls: ['./add-post-form.component.css']
})
export class AddPostFormComponent {

  pageTitle: string = "Dodaj post";
  model: Partial<Post> = {};
  options: FormGroup;
  colorControl = new FormControl('primary');
  

  constructor(fb: FormBuilder, private http: HttpPostsService,private _bottomSheet: MatBottomSheet) { 
    this.options = fb.group({
      color: this.colorControl
    });
  }
 
  send(){      
    this.http.postPost(this.model as Post).subscribe(
      result => this.openPostConfirm(),
      error => alert(error)
    );
  }
  printModel(title: NgModel){
    // console.log(title)
  }

  openPostConfirm(): void {
    this._bottomSheet.open(AddPostConfirmComponent);
    this.model = {}
  }

}
