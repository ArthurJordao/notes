import { Injectable } from '@angular/core';
import {Note} from './notes/note';

@Injectable()
export class NotesService {

  constructor() { }
  
  /**
   * getNotes
   * @returns a list of notes from localStorage
   */
  public getNotes(): Note[] {
    let notesJson: string = localStorage.getItem('notes');
    let notes: Note[] = [];
    if (notesJson) {
      notes = JSON.parse(notesJson);
    }
    return notes;
  }

  public setNotes(notes: Note[]) {
    localStorage.setItem('notes', JSON.stringify(notes));
  }

}
