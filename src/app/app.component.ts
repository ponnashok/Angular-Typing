import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = faker.lorem.sentence();
  enteredText = '';

  onInput(value: string) {
    this.enteredText = value
  }

  onChange(letter: string, enterText: string) {
    if (!enterText) {
      return 'pending';
    }

    return enterText === letter ? 'correct' : 'incorrect';
  }

}
