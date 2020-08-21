# libraryApiNodeJs

Спроектировать схему БД и backend для хранения библиотеки. Интересуют авторы и книги. Взаимодействие с пользователем происходит посредством HTTP запросов к API. Все ответы представляют собой JSON объекты.

Сервер реализует следующие методы:

выдача всех книг одного автора
выдача автора по книге
выдача списка книг, написанных ровно 3 соавторами. Результат: книга - количество соавторов.

# Использование:
В корневой папке запустить:
docker-compose up

# Описание api:

выдача всех книг одного автора:<br />
Тип запроса: GET <br />
Параметр: author_name<br />
Тип параметра: строка<br />
http://localhost:8081/book/books-by-author?author_name=Толстой

выдача автора по книге:<br />
Тип запроса: GET <br />
Параметр: book_name<br />
Тип параметра: строка<br />
http://localhost:8081/author/authors-by-book?book_name=Война<br />


выдача списка книг, написанных ровно 3 соавторами. Результат: книга - количество соавторов:<br />
Тип запроса: GET <br />
Параметр: author_count<br />
Тип параметра: целое число<br />
http://localhost:8081/book/books-by-author-count?author_count=3<br />

