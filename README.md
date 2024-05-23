# STMLabs test app

This is my solution to the test task for STMLabs. It consists of a table with users, which is filled in dynamically using data that is requested from the server

## Installation

1. Clone the Repository: `git clone https://github.com/Dimangis/STM-Labs-app.git`
2. Navigate to the Project Directory: `cd project`
3. Install Dependencies: `npm install`
4. Start the Application: `npm start`

## Open in Your Browser:

Open your web browser and go to `http://localhost:3000` to view the application.

## Structure:

📦src\
 ┣ 📂components\
 ┃ ┣ 📂common\
 ┃ ┃ ┣ 📂Interfaces\
 ┃ ┃ ┃ ┗ 📜UserInterface.ts\
 ┃ ┃ ┣ 📂Logo\
 ┃ ┃ ┃ ┣ 📜index.ts\
 ┃ ┃ ┃ ┣ 📜Logo.modules.css\
 ┃ ┃ ┃ ┗ 📜Logo.tsx\
 ┃ ┃ ┣ 📂PageContainer\
 ┃ ┃ ┃ ┣ 📜index.ts\
 ┃ ┃ ┃ ┣ 📜PageContainer.module.css\
 ┃ ┃ ┃ ┣ 📜PageContainer.tsx\
 ┃ ┃ ┃ ┗ 📜PageContainer.types.ts\
 ┃ ┃ ┣ 📂PictureComponent\
 ┃ ┃ ┃ ┣ 📜index.ts\
 ┃ ┃ ┃ ┣ 📜PictureComponent.modules.css\
 ┃ ┃ ┃ ┗ 📜PictureComponent.tsx\
 ┃ ┃ ┣ 📂Text //my component from another project\
 ┃ ┃ ┃ ┣ 📜index.ts\
 ┃ ┃ ┃ ┣ 📜Text.modules.css\
 ┃ ┃ ┃ ┗ 📜Text.tsx  \
 ┃ ┃ ┣ 📂Tooltip\
 ┃ ┃ ┃ ┣ 📜Tooltip.module.css\
 ┃ ┃ ┃ ┗ 📜Tooltip.tsx\
 ┃ ┃ ┣ 📂UserTable\
 ┃ ┃ ┃ ┣ 📜UserTable.module.css\
 ┃ ┃ ┃ ┗ 📜UserTable.tsx\
 ┃ ┃ ┗ 📜index.ts\
 ┃ ┣ 📂Header\
 ┃ ┃ ┣ 📂Searcher\
 ┃ ┃ ┃ ┣ 📜index.ts\
 ┃ ┃ ┃ ┣ 📜Searcher.module.css\
 ┃ ┃ ┃ ┗ 📜Searcher.tsx\
 ┃ ┃ ┣ 📂ThemeChanger\
 ┃ ┃ ┃ ┣ 📜index.ts\
 ┃ ┃ ┃ ┣ 📜slice.ts  //for Redux and ThemeChanger\
 ┃ ┃ ┃ ┣ 📜ThemeChanger.module.css\
 ┃ ┃ ┃ ┗ 📜ThemeChanger.tsx\
 ┃ ┃ ┣ 📜Header.modules.css\
 ┃ ┃ ┣ 📜Header.tsx\
 ┃ ┃ ┗ 📜index.ts\
 ┃ ┣ 📂hooks\
 ┃ ┃ ┣ 📜useFetch.ts  // custom hook for axios get\
 ┃ ┃ ┗ 📜useSearch.tsx // custom hook for useContext\
 ┃ ┣ 📂Layout\
 ┃ ┃ ┣ 📜index.ts\
 ┃ ┃ ┗ 📜Layout.tsx\
 ┃ ┗ 📜index.ts\
 ┣ 📂pages\
 ┃ ┣ 📂HomePage\
 ┃ ┃ ┣ 📜HomePage.tsx\
 ┃ ┃ ┗ 📜index.ts\
 ┃ ┗ 📜index.ts\
 ┣ 📂router\
 ┃ ┣ 📜.gitkeep\
 ┃ ┣ 📜index.ts\
 ┃ ┣ 📜paths.ts\
 ┃ ┗ 📜router.tsx\
 ┣ 📂services\
 ┃ ┗ 📜transpot.ts  //for axios\
 ┣ 📂store\
 ┃ ┗ 📜store.ts  /for ThemeChanger, taken from another my project\
 ┣ 📂utils\
 ┃ ┣ 📜debounce.ts  //my debounce\
 ┃ ┗ 📜formatDate.ts\
 ┣ 📜App.tsx\
 ┣ 📜global.css\
 ┗ 📜index.tsx