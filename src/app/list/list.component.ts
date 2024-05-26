import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  list: string[] = [];
  element: string = "";

  addElement() {
    this.list.push(this.element);
    this.element = ""; // Con esto se limpia el campo de texto
  }

  removeElement(element: string) {
    const index = this.list.indexOf(element);
    if (index !== -1) {
      this.list.splice(index, 1);
    } 
  }
}
