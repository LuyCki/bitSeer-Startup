import { Injectable } from '@angular/core';

interface StorageItem {
  key: string;
  value: any;
}

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  public add(item: StorageItem): void {
    localStorage.setItem(item.key, item.value);
  }

  public get(key: string): string {
    return localStorage.getItem(key);
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }
}
