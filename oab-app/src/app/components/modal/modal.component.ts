import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() opem: boolean = false;
  @Output() confirm = new EventEmitter();
  @Output() cancel = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  fechar() {
    this.cancel.emit(false);
  }
  excluir() {
      this.confirm.emit();
  }
}
