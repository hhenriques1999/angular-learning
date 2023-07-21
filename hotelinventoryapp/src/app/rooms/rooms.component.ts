import { Component } from '@angular/core';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  hotelName = "Hilton Hotel";

  numbersOfRooms = 10;

  hideRooms: boolean = false;

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  increaseRooms() {
    this.numbersOfRooms += 1;
  }

  decreaseRooms() {
    this.numbersOfRooms -= 1;
  }

}
