import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Room } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {

  @Input() rooms: Room[] = [];

  @Output() selectedRoom : EventEmitter<Room> = new EventEmitter<Room>();

  constructor() {

  }

  ngOnInit(): void {

  }

  selectRoom(room: Room) {
    return this.selectedRoom.emit(room);
  }
}
