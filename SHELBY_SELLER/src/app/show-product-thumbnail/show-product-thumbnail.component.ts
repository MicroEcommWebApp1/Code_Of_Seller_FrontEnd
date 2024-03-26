import { Inject } from '@angular/core';
import { Component } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-product-thumbnail',
  templateUrl: './show-product-thumbnail.component.html',
  styleUrls: ['./show-product-thumbnail.component.css']
})
export class ShowProductThumbnailComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any){}

  ngOnInit():void{
    this.receiveImages();
  }

  receiveImages(){
    console.log(this.data);
  }

}
