import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: number = 0;

  getData() {
    return this.data;
  }

  incrementData() {
    this.data++;
  }}
