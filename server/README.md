# GoMerch Store Backend

Backend API для GoMerch Store с аутентификацией и PostgreSQL базой данных.

## 🛠 Технологии

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **PostgreSQL** - База данных
- **JWT** - Аутентификация через токены
- **bcryptjs** - Хэширование паролей

## 📋 Требования

- Node.js (v16 или выше)
- PostgreSQL (v12 или выше)

## 🚀 Установка

### 1. Установить PostgreSQL

**Windows:**
1. Скачать с https://www.postgresql.org/download/windows/
2. Запустить установщик
3. Запомнить пароль для пользователя `postgres`
4. По умолчанию порт: 5432

**Или использовать Docker:**
```bash
docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
```

### 2. Создать базу данных

Открыть pgAdmin или psql и выполнить:
```sql
CREATE DATABASE gomerchstore;
```

Или через командную строку:
```bash
psql -U postgres
CREATE DATABASE gomerchstore;
\q
```

### 3. Установить зависимости

```bash
cd server
npm install
```

### 4. Настроить переменные окружения

Скопировать `.env.example` в `.env` и заполнить:
```bash
cp .env.example .env
```

Отредактировать `.env`:
```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=gomerchstore
DB_USER=postgres
DB_PASSWORD=ваш_пароль_от_postgres

JWT_SECRET=случайная_строка_для_безопасности

PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

### 5. Запустить сервер

```bash
npm start
```

Или для разработки с автоперезагрузкой:
```bash
npm run dev
```

Сервер запустится на http://localhost:5000

## 📡 API Endpoints

### Аутентификация

**POST** `/api/auth/register`
```json
{
  "username": "john",
  "email": "john@example.com",
  "password": "password123"
}
```

**POST** `/api/auth/login`
```json
{
  "usernameOrEmail": "john",
  "password": "password123"
}
```

**POST** `/api/auth/google-login`
```json
{
  "googleData": {
    "name": "John Doe",
    "email": "john@gmail.com",
    "picture": "https://..."
  }
}
```

**GET** `/api/auth/me` (требует токен)
Headers: `Authorization: Bearer <token>`

**GET** `/api/health` - проверка работы сервера

## 🔐 Безопасность

- Пароли хэшируются с помощью bcrypt
- JWT токены для аутентификации
- CORS настроен для фронтенда
- SQL injection защита через параметризованные запросы

## 📊 Структура базы данных

### Таблица `users`
- `id` - PRIMARY KEY
- `username` - уникальный логин
- `email` - уникальная почта
- `password` - хэшированный пароль
- `avatar` - URL аватара
- `provider` - 'local' или 'google'
- `created_at` - дата создания
- `updated_at` - дата обновления

## 🐛 Troubleshooting

**Ошибка подключения к PostgreSQL:**
- Проверьте, что PostgreSQL запущен
- Проверьте правильность данных в `.env`
- Убедитесь, что база данных создана

**Порт уже занят:**
- Измените PORT в `.env` на другой (например, 5001)

**Ошибка "relation users does not exist":**
- Таблицы создаются автоматически при первом запуске
- Если не создались, проверьте права пользователя БД
