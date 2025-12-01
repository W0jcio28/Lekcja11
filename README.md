Aplikacja to interaktywna lista zakupów stworzona przy użyciu jQuery.
Umożliwia użytkownikowi dodawanie, edytowanie, usuwanie, sortowanie i filtrowanie elementów listy.
Lista reaguje dynamicznie na kliknięcia, zmiany tekstu oraz przeciąganie elementów dzięki integracji z jQuery UI.
Całość działa bez przeładowania strony, a operacje są animowane dla lepszej czytelności (fadeOut/fadeIn).

📌 Funkcje aplikacji

✔ Dodawanie produktów – do listy, na początek lub koniec
✔ Usuwanie produktów – ostatniego lub całej listy
✔ Edycja pozycji – kliknięcie zamienia element na input, Enter zapisuje zmiany
✔ Efekty animacji – fadeOut → zmiana → fadeIn
✔ Przywracanie przykładowej listy
✔ Dodawanie klasy list-group-item do nowych elementów
✔ Podświetlanie klikniętych elementów (active)
✔ Kolorowanie co drugiego elementu (:even)
✔ Przeciąganie elementów (drag & drop – jQuery UI sortable)
✔ Sortowanie alfabetyczne
✔ Filtrowanie listy według wpisanej frazy

📌 Użyte metody i funkcje jQuery
🔹 Manipulacja DOM
append() – dodawanie elementów na końcu
prepend() – dodawanie elementów na początku
remove() – usuwanie elementu
empty() – czyszczenie zawartości elementu
text() – pobieranie/ustawianie tekstu
html() – wstawianie HTML
css() – zmiana stylów CSS
toggle() – ukrywanie/pokazywanie elementów zależnie od warunku
🔹 Obsługa zdarzeń
click() – reakcja na kliknięcie
on() – delegacja zdarzeń dla dynamicznych elementów
keydown() – obsługa klawiszy, m.in. Enter
🔹 Animacje
fadeOut() – wygaszanie
fadeIn() – pojawianie się elementu
🔹 Wyszukiwanie i filtrowanie
:last – ostatni element
:even – co drugi element
each() – iteracja po elementach listy
includes() (JS) – sprawdzanie frazy w tekście
🔹 jQuery UI
sortable() – przeciąganie elementów listy
disableSelection() – blokada zaznaczania tekstu podczas drag & drop
