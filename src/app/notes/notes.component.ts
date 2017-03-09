import { Component, OnInit } from '@angular/core';
import { Note } from "./note";
import { NotesService } from "../notes.service";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notes = this.notesService.getNotes();
  }
  public updateNotes() {
    this.notesService.setNotes(this.notes);
  }
  public notes: Note[];
  public newNote: Note = new Note;
  public editMode: boolean = false;
  public addNewNote() {
    this.notes.push(this.newNote);
    this.newNote = new Note;
    this.updateNotes();
  }
  public deleteNote(note:Note) {
    let noteIndex = this.notes.indexOf(note);
    if (noteIndex != -1) {
      this.notes.splice(noteIndex, 1);
    }
    this.updateNotes();
  }
  public enableEdit() {
    this.editMode = true;
  }
  public saveEdit() {
    this.updateNotes();
    this.editMode = false;
  }
  public makeDone(note:Note) {
    note.done = true;
    this.updateNotes();
  }
  public makeUndone(note:Note) {
    note.done = false;
    this.updateNotes();
  }
}
