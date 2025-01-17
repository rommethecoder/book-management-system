import { Component } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  newBookTitle = "";
  newBookAuthor = "";
  books: Book[] = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let savedBooks = localStorage.getItem("books");

    this.books = savedBooks ? JSON.parse(savedBooks) : [];
  }

  addBook() {
    if (this.newBookTitle.trim().length && this.newBookAuthor.trim().length) {
      let newBook: Book = {
        id: Date.now(),
        title: this.newBookTitle,
        author: this.newBookAuthor
      }
      this.books.push(newBook);

      this.newBookTitle = "";
      this.newBookAuthor = "";

      localStorage.setItem("books", JSON.stringify(this.books));
    }
  }

  deleteBook(index: number) {
    this.books.splice(index, 1)

    localStorage.setItem("books", JSON.stringify(this.books));
  }
}
