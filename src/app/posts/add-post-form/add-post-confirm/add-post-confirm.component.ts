import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-add-post-confirm',
  templateUrl: './add-post-confirm.component.html',
  styleUrls: ['./add-post-confirm.component.css']
})
export class AddPostConfirmComponent {

  constructor(private _bottomSheet: MatBottomSheet) { }

  closePostConfirm(){
    this._bottomSheet.dismiss(AddPostConfirmComponent);
  }
 
}
