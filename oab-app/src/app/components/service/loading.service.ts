import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class LoadingService {

    private event = new EventEmitter<any>();

    start(message: string = '') {
        this.event.emit({ value: true, message: message });
    }

    stop(message: string = '') {
        this.event.emit({ value: false, message: message });
    }

    changes(): EventEmitter<any> {
        return this.event;
    }
}