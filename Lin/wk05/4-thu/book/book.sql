CREATE DATABASE bookstore;

CREATE TABLE books (
  id SERIAL4 PRIMARY KEY,
  title varchar(400),
  isbn varchar(100),
  authors varchar(100),
  publisher varchar(400)
);

INSERT INTO books (title, isbn, authors, publisher) values ('JavaScript: The Good Parts', '1593275846' , 'Marijn Haverbeke', 'No Starch Press');
INSERT INTO books (title, isbn, authors, publisher) values ('You Don''t Know JS: Up & Going', '1491924462', 'Kyle Simpson', 'O''Reilly Media');