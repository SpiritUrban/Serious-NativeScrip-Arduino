import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: 'ns-speech-to-text',
  templateUrl: './speech-to-text.component.html',
  styleUrls: ['./speech-to-text.component.css']
})
export class SpeechToTextComponent implements OnInit {

  constructor(
    private routerExtensions: RouterExtensions
  ) { }

  ngOnInit(): void {

  }

  goTo(page) {
    console.log('......................')
    this.routerExtensions.navigate(["/" + page],
      {
        clearHistory: true,
        animated: true,
        transition: {
          name: 'flip',
          duration: 2000,
          curve: 'linear'
        }
      }
    );
  }

  }
