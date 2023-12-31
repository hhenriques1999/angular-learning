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

  selectedRoom!: Room;

  title = "Room List";

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
    this.title = "Rooms";
  }

  increaseRooms() {
    this.numbersOfRooms += 1;
  }

  decreaseRooms() : void {
    this.numbersOfRooms -= 1;
  }

  addRoom() : void {
    const room: Room = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: "Stuff af",
      price: 300,
      photos: "",
      checkinTime: new Date('21-Nov-2023'),
      checkoutTime: new Date('23-Dec-2023'),
      rating: 4.4,
    };
    // this.rooms.push(room);
    this.rooms = [...this.rooms, room]; // This means, keep the existing array (spread the existing array), create a new array and add the new record to it
  }

  roomInfo: RoomInfo = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  selectRoom(room: Room) {
    this.selectedRoom = room;

  }
}
