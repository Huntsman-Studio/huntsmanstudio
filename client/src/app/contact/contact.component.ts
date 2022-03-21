import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public copy = false;

  constructor(private clipboard: Clipboard) { }

  ngOnInit(): void {
  }

  // Copy to ClipBoard
  copyText(textToCopy: string) {
    this.clipboard.copy(textToCopy);
    this.copy = true;

    setTimeout( () => {
      this.copy = false;
      // console.log("beforeTime");
    } , 1000);

    // console.log("afterTime");
    // this.copy = true;
  }

}
