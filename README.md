# Lad store

### Описание проекта:

Интернет магазин мерча

### Установка

```bash
git clone https://github.com/loonlylokly/lad_store.git
```
```bash
cd lad_store
```
```bash
echo "MONGODB_URL=<add link to mongodb>" > .env.local
```
Вместо "< add link to mongodb >" добавьте ссылку на свою монгодб с логином и паролем
```bash
npm install
```
```bash
npm run build
```
```bash
npm run start
```

Запустится на http://localhost:3000

### Основной функционал

*   Список товаров
*   Фильтрация товаров
*   Страница товара
*   Корзина
*   Оформление заказа

Требования

*   Стек NextJS
*   Функциональные компоненты, React-hooks
*   Модульные стили
*   Роутинг NextJS
*   Адаптивность - приложение должно корректно выглядеть на всех типах устройств (mobile, tablet, desktop, retina)
*   TypeScript
*   Git and commits (git flow)
*   Redux/ReduxToolKit. Асинхронные экшены Redux-thunk или Redux-saga
*   Работа с API с помощью клиента Axios.
*   Деплой приложения (gh-pages, vercel, heroku.com, fly.io).


### Страницы онлайн магазина

1.  Главная страница
2.  Страница поиска с фильтрами и прочим
3.  Страница продукта
4.  Контакты
5.  Корзина
6.  Форма оформления заказа
7.  404
