# SMDTestTask

## Описание проекта

SMDTestTask — это простое веб-приложение, состоящее из фронтенд и бэкенд компонентов, использующих PostgreSQL в качестве базы данных. Проект демонстрирует базовую архитектуру приложения с использованием Docker для контейнеризации.

## Технологии

- **Язык программирования**: Python, JavaScript
- **Фронтенд**: React
- **Бэкенд**: Django
- **База данных**: PostgreSQL
- **Контейнеризация**: Docker

## Установка

1. **Клонируйте репозиторий**
```bash
git clone https://github.com/nicola1223/SMDTestTask.git
cd SMDTestTask
```
2. **Создайте файл .env**

Создайте файл .env в корневой директории проекта и добавьте необходимые переменные окружения для вашего приложения.

```dotenv
DB_NAME='postgres'
DB_USER='postgres'
DB_PASSWORD='<CREATE YOU PASSWORD>'
DB_HOST='db'
DB_PORT='5432'

WEATHER_API_KEY='<YOUR API KEY FOR OPENWEATHERMAP.ORG>'

POSTGRESQL_PASSWORD='<SAME AS DB_PASSWORD>'
```

3. **Соберите и запустите контейнеры**

Убедитесь, что у вас установлен Docker и Docker Compose. Затем выполните команду:

```bash
docker compose up --build
```

4. **Доступ к приложению**

Бэкенд будет доступен на [localhost:8000](http://localhost:8000)

Фронтенд будет доступен на [localhost:3000](http://localhost:3000)

PostgreSQL будет доступен на порту 5432.

Команды

Для остановки контейнеров:
```bash
docker-compose down
```
Для перезапуска контейнеров:
```bash
docker-compose restart
```