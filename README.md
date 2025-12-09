📑 Table of Contents

1.Tech Stack
2.Folder Structure
3.How to Run
4.Assumptions
5.Design Challenges
6.Final Note

🧩 Tech Stack & Libraries Used
Core:
⚛️ React 18
▶️ Next.js 14 (App Router)
🔷 TypeScript

Styling:
🎨 Tailwind CSS — Pixel-perfect Figma replication
🎛 CSS Modules — Component-scoped style overrides

State Management:
🟣 Redux Toolkit (Slices + Async Thunks)

Custom hooks:
useChargerStatus()
useChargerDetails()
useNotifications()
useNotificationSimulator() (for realtime updates)

Custom context:
MobileNotifyContext() :- To hamdle notification screen on mobile & tablet screens

Next.js Utilities:
🖼 next/image
🖼 next/Link

Flexible server/client component architecture

📁 Folder Structure

project/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── error.tsx
│   ├── loading.tsx
│   └── not-found.tsx
    └──layout.module.css
│
├── components/
│   ├── Sidebar/
│   ├── Header/
│   ├── ChargerHeader/
│   ├── ChargerTabs/
│   ├── ChargerDetails/
│   │   ├── Diaganosis.tsx
│   │   ├── ChargerStatus.tsx
│   │   ├── ChargerMCB.tsx
│   │   ├── Emergency.tsx
│   │   ├── Temperature.tsx
│   │   ├── ChargerGunStatus.tsx
│   │   └── ChargerDetails.tsx
        └──ChargerDetails.module.css
│   ├── Notifications/
│   └── ...
│
├── hooks/
│   ├── useChargerStatus.ts
│   ├── useChargerDetails.ts
│   ├── useNotifications.ts
│   └── useNotificationSimulator.ts
│
├── context/
│   ├── MobileNotifyContext.tsx
│
├── store/
│   ├── store.ts
│   ├── hooks.ts
│   └── slices/
│       └── chargerSlice.ts
│
├── styles/
│   └── globals.css
│
└── README.md

▶️ How to Run the Project

1️⃣ Install Node.js
    node -v
2️⃣ Install dependencies
    npm install
3️⃣ Start the dev server
    npm run dev
4️⃣ Open
    http://localhost:3000

🧠 Assumptions Made
1. No actual backend available:-
Mock APIs & dummy IDs were required.
→ Hooks + thunks are fully functional and ready for real API integration.

2. Realtime Notifications:-
Since backend push (WS/SSE) wasn’t available, a client-side realtime simulator was implemented.
    useNotificationSimulator(true, 7000);
   
3. Pixel-perfect UI:-
Every major UI section closely follows Figma:
    Left Sidebar
    Top Header (sticky)
    Charger Header
    Tabs (with active states)
    6 Detail Cards
    Live Notifications Panel

4. Icons:-
Figma icons are expected

🎨 Design Challenges & Solutions
1. Achieving Complex Grid Ratios
2. Sticky Header Overlapping Content
3. Realtime Notification Simulation:-
  Simulated live updates using a custom hook that dispatches Redux actions every N seconds.
4. Consistent Design System:-
  Tailwind variables + Figma-based color palette ensured proper mapping.

🙏 Final Note

I have tried my best to deliver:
✨ Pixel-perfect Figma implementation
✨ Fully responsive UI
✨ Proper folder structure
✨ Real API architecture (mocked for demo)
✨ Clean & scalable code
✨ Realtime behaviour simulation

Given the tight timeline, if any small detail remains slightly off, kindly pardon it — I made sure the core logic and design fidelity are strong and production-ready.
