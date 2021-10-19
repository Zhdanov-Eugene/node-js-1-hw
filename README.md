# node-js-1-hw
Инициализируй npm в проекте-npm init -y(yes);
В корне проекта создай файл index.js-index.js;
Поставь пакет nodemon как зависимость разработки (devDependencies)-npm i nodemon -D;
єсли єсть проблеми ожно исправить-npm audit fix;
создать папку-.gitignore и добавить-node_modules/;package-lock.json;
не обязательно npm install express uuid commander;
В файле package.json добавь "скрипты" для запуска index.js-  
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "start:dev": "nodemon index.js"
git add *;
git commit -m "Commit message"(Created CLI application);
git push origin main;
