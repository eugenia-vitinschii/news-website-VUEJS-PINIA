$\color{#00bcd4}{\textsf{responsive news website}}$

![PINIA](https://img.shields.io/badge/PINIA-00bcd4?style=flat&logo=vuedotjs&logoColor=fff)
![VUE](https://img.shields.io/badge/Vue%20JS%203-00bcd4?style=flat&logo=vuedotjs&logoColor=fff)
![Axios](https://img.shields.io/badge/axios-00bcd4?style=flat&logo=axios&logoColor=fff)
![SASS](https://img.shields.io/badge/SASS-00bcd4?style=flat&logo=sass&logoColor=fff)
![HTML](https://img.shields.io/badge/HTML%205-00bcd4?style=flat&logo=html5&logoColor=fff)
 
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
###   \{^_^}/ hi!

###  Loading db.json
```
json-server -w db.json
```
### Run All
```
npm run dev
```
### Features
- Skeleton
- Infinite scroll
- <transition-group />
- Grid masonry

### News website short about:
*  <meta > description, keywords, theme-color...
*  Pinia store  (fetchNews(), sortNews(),  ...)
*  Axios
*  db.json news
*  load more news
*  show more information ( for news item)
*  news search (HomeView)
*  filter news by category ( exlude HomeView)
*  change list to grid style for items views ( Category views)
*  router-link to view by category in item ( All views)
*  responsive web design 
*  sass folder structure ( reset, mixins, variables, )
*  sass style for text limit ( for all item news component)
*  sass style for hover a tags ( for all app)
*  sass grid, flex
*  @media for font-size, content


# Folders

```
src
   - assets
      - sass
         - abstracts
            - _all.sass
            - _mixin.sass
            - _variables.sass
         - components
            - _....sass
         - core
            - _....sass
         - layout
            - _....sass
         - pages
            - _home.sass
         - sections
            - _....sass
         - app.sass
   - components
      - components
         - ...
      - core
         - TheArticleTitle.vue
         - ...
      - layout
         - TheHeader.vue
         - TheFooter.vue
      - sections
         - TheItem.vue
         - ...
   - router
      - index.js
   - stores
      - news.js
      - theme.js
   - views
      - ...View.vue
      - ...View.vue
      - ...View.vue
   - App.vue
   main.js

```

