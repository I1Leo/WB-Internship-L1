'use strict'

// Задаем URL для загрузки данных с сервера
const url = 'http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true';

// Используем API Fetch для получения данных по указанному URL
fetch(url)
  .then(response => response.json()) // Преобразуем ответ в формат JSON
  .then(data => {
    // Определяем переменные для управления отображением данных на странице
    const perPage = 50; // Количество записей на одной странице
    let currentPage = 1; // Текущая страница

    // Определяем границы данных для текущей страницы
    let start = (currentPage - 1) * perPage;
    let end = start + perPage;

    // Выбираем данные для текущей страницы
    let currentData = data.slice(start, end);

    // Отображаем таблицу с данными на странице
    renderTable(currentData);

    // Добавляем обработчики событий для кнопок "Предыдущая страница" и "Следующая страница"
    document.getElementById('prevPage').addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        document.getElementById('currentPage').textContent = currentPage;
        start = (currentPage - 1) * perPage;
        end = start + perPage;
        currentData = data.slice(start, end);
        renderTable(currentData);
      }
    });

    document.getElementById('nextPage').addEventListener('click', () => {
      currentPage++;
      document.getElementById('currentPage').textContent = currentPage;
      start = (currentPage - 1) * perPage;
      end = start + perPage;
      currentData = data.slice(start, end);
      renderTable(currentData);
    });

    // Функция для отображения данных в таблице
    function renderTable(data) {
      const content = document.querySelector('tbody');
      content.innerHTML = ''; // Очищаем содержимое перед добавлением новых данных

      data.forEach((item) => {
        const tableRow = document.createElement('tr');
        content.append(tableRow);

        for (let key in item) {
          const value = item[key];
          const tableD = document.createElement('td');
          tableD.textContent = value;
          tableD.setAttribute('data-column', key);
          tableRow.append(tableD);
        }
      });
    }

    // Добавляем обработчики событий для заголовков столбцов таблицы
    const headers = document.querySelectorAll('th');
    // Объект для отслеживания состояния сортировки
    const sortState = {};

    headers.forEach((header) => {
      header.addEventListener('click', () => {
        const column = header.getAttribute('data-column');

        if (!sortState[column]) {
          // Если нет состояния сортировки, устанавливаем сортировку по возрастанию
          sortState[column] = 'asc';
          // Визуально указываем направление сортировки в заголовке столбца
          header.textContent += ' ▼';
          // Вызываем функцию сортировки
          sortTable(column, sortState[column]);
          // Если сортировка по возрастанию, меняем на сортировку по убыванию
        } else if (sortState[column] === 'asc') {

          sortState[column] = 'desc';
          header.textContent = header.textContent.slice(0, header.textContent.length - 2);
          // Визуально указываем направление сортировки в заголовке столбца
          header.textContent += ' ▲';
          // Вызываем функцию сортировки
          sortTable(column, sortState[column]);
          // Если сортировка по убыванию, сбрасываем состояние сортировки
        } else if (sortState[column] === 'desc') {
          delete sortState[column];
          header.textContent = header.textContent.slice(0, header.textContent.length - 2);
          // Отображаем данные без сортировки
          renderTable(currentData);
        }
      });
    });

    // Функция для сортировки данных в таблице
    function sortTable(column, sortOrder) {
      const sortedData = currentData.slice();

      sortedData.sort((a, b) => {
        const valueA = a[column];
        const valueB = b[column];

        if (typeof valueA === 'string' && typeof valueB === 'string') {
          // Сортировка строк
          return sortOrder === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
        } else {
          // Сортировка чисел
          return sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
        }
      });
      // Отображаем отсортированные данные в таблице
      renderTable(sortedData);
    }
  });




