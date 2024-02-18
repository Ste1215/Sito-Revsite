import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigazioneService{
    private currentComponentKey = 'currentComponent';

    saveCurrentComponent(componentName: string): void {
        localStorage.setItem(this.currentComponentKey, componentName);
    }
    getCurrentComponent(): string {
        return localStorage.getItem(this.currentComponentKey) || '/homepage';
    }
}