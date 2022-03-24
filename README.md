# 88rising🚀🚀🚀

Creative coding experimental project built during the RMIT Creative Coding Course, tend to explore the encyclopedic affordance.

Built upon following open source project:

- Vite
- React
- GSAP
- unstated-next

📺 Explanatory video can be found here:

https://www.youtube.com/watch?v=8KiIE7TVx9s

## Prerequisites

You might need some experience working with following technologies to get familiar with this project's code.

- Node.js
- Typescript
- React
- GSAP.js

Make sure that your computer is installed with Node.js version > 16, with npm configured.

## Getting Started

### 1. Add large files 📃

Video files are ignored and haven't been push onto the Github.

Before you start, you must download the media files in the link below, and add them in the assets folder in the root.

https://drive.google.com/drive/folders/1q7jewuiUdax9_iFp5mjJM6FLrt5VtBV4?usp=sharing

### 2. Install dependencies 💾

```bash
npm install
```

### 3. Start the development server, and preview locally💻

```bash
npm run dev
```

### 4. Bundle assets, and generate files for production environment 🚀

```base
npm run build
```

Then update the files in the dist folder generated onto the server.

## Overall File structure

```
├── src
│ ├── assets -> Where all the assets located (e.g.images,videos)
│ ├── components -> Where all the comppnents located
│ ├── hooks -> Custom react hooks
│ ├── styles -> Global styling files
│ ├── albumData.ts -> strucutred album meta data used across the website
│ ├── App.tsx -> React entry file
│ ├── global.tsx -> Shared states across components
│ └── main.tsx -> React framework injector
└── index.html
```

For further documentation, check the following links.

- React https://reactjs.org/
- Gsap https://greensock.com/gsap/
- Styled-component https://styled-components.com/
- Typescript https://www.typescriptlang.org/
