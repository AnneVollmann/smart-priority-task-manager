import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",       // Ordner mit deinen Testdateien
  timeout: 30000,           // optional: 30s pro Test
  retries: 0,               // optional: keine Wiederholung
  use: {
    baseURL: "http://localhost:3000",  // <- hier die Next.js Dev URL
    headless: false,                    // sichtbar beim Testen
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: "retain-on-failure",
  },
});