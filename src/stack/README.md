Стеки  
===

**Стек** является базовой структурой данных, в которой можно только вставлять или удалять элементы в начале стека. Он напоминает стопку книг. Если вы хотите взглянуть на книгу в середине стека, вы сначала должны взять книги, лежащие сверху.  
Стек считается LIFO (Last In First Out) - это означает, что последний элемент, который добавлен в стек, - это первый элемент, который из него выходит.  
Есть дву реализации стека:  
1. для хранилища взят такой объект JavaScripta, как массив \[\].  
2. для хранилища взят такой объект JavaScripta, как объект \{\}.  

Основные методы:  
* push - добавляет элемент данных на верх стека
* pop - удаляет элемент данных с верха стека и возвращает их
* peek - возвращает верхний элемент данных стека
* clear - очищает стек
* isEmpty - свойство, возвращающее **true**, если стек пустой, и **false**, если в стеке есть еще хотя бы один элемент
