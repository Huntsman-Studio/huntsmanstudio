import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private meta: Meta, private title: Title, private clipboard: Clipboard) {}

  ngOnInit(): void {}

  copyEmail(): void {
    this.clipboard.copy("receiver@huntsmanstudio.gr");
  }
}
