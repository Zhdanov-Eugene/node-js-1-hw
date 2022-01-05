# node-js-1-hw
Инициализируй npm в проекте-npm init -y(yes);
В корне проекта создай файл index.js-index.js;
Поставь пакет nodemon как зависимость разработки (devDependencies)-npm i nodemon -D;
єсли єсть проблеми ожно исправить-npm audit fix;
создать папку-.gitignore и добавить-node_modules/;package-lock.json;
npm install express uuid commander yargs;
В файле package.json добавь "скрипты" для запуска index.js-  
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "start:dev": "nodemon index.js"
git add *;
git commit -m "Created CLI application";
git push origin main;
В корне проекта создай папку db. Для хранения контактов скачай и используй файл contacts.json, положив его в папку db.

В корне проекта создай файл contacts.js.

Сделай импорт модулей fs и path для работы с файловой системой
Создай переменную contactsPath и запиши в нее путь к файле contacts.json. Для составления пути ипользуй методы модуля path.
Добавь функции для работы с коллекцией контактов. В функциях используй модуль fs и его методы readFile() и writeFile()
Сделай экспорт созданных функций через module.exports........
Сделай импорт модуля contacts.js в файле index.js и проверь работоспособность функций для работы с контактами.
В файле index.js импортируется пакет yargs для удобного парса аргументов командной строки. Используй готовую функцию invokeAction() которая получает тип выполняемого действия и необходимые аргументы. Функция вызывает соответствующий метод из файла contacts.js передавая ему необходимые аргументы.
Запусти команды в терминале и сделай отдельный скриншот результата выполнения каждой команды.

# Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list

# Получаем контакт по id
node index.js --action get --id 5

# Добавялем контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

# Удаляем контакт
node index.js --action remove --id=3
