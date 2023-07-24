import { Component, OnInit } from '@angular/core';
import { Room, RoomInfo } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  constructor() {
  }

  rooms: Room[] = [];

  hotelName = "Hilton Hotel";

  numbersOfRooms = 10;

  hideRooms: boolean = false;

  ngOnInit(): void {
    this.rooms = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'TV, AC, Bathroom',
        price: 500,
        photos: "https://images.unsplash.com/photo-1690040158054-04a19549b43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
        checkinTime: new Date('11-Nov-2023'),
        checkoutTime: new Date('23-Nov-2023'),
        rating: 4.712,
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room+',
        amenities: 'TV, AC, Bathroom, Painting',
        price: 900,
        photos: "https://images.unsplash.com/photo-1690040158054-04a19549b43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
        checkinTime: new Date('13-Nov-2023'),
        checkoutTime: new Date('24-Nov-2023'),
        rating: 3.7,
      },
      {
        roomNumber: 3,
        roomType: 'Deluxe Room++',
        amenities: 'TV, AC, Bathroom, Door, Painting',
        price: 1500,
        photos: "https://images.unsplash.com/photo-1690040158054-04a19549b43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
        checkinTime: new Date('14-Nov-2023'),
        checkoutTime: new Date('26-Nov-2023'),
        rating: 2.33
      }
    ]
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  increaseRooms() {
    this.numbersOfRooms += 1;
  }

  decreaseRooms() {
    this.numbersOfRooms -= 1;
  }

  roomInfo: RoomInfo = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  selectRoom(room: Room) {
    console.log(room);

  }
}
