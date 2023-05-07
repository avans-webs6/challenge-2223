import { Component, EventEmitter, Output } from '@angular/core';

/**Modal is nog work in progress! */
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Output() onSave = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<any>();
  

}
