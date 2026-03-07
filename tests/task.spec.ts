import { test, expect } from "@playwright/test";

test.describe("Task App", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should add a new task successfully", async ({ page }) => {
    const taskName = "Test Task";

    await page.fill('[data-testid="task-name-input"]', taskName);

    await page.locator('[data-testid="task-complexity-select"]').click();
    await page.locator('li[role="option"]', { hasText: "3" }).click();

    await page.locator('[data-testid="task-priority-select"]').click();
    await page.locator('li[role="option"]', { hasText: "Hoch" }).click();

    await page.click('[data-testid="add-task-btn"]');

    await expect(page.locator(`text=${taskName}`)).toBeVisible();
  });

  test("should calculate and show priorityScore correctly", async ({
    page,
  }) => {
    const taskName = "Test Task";

    await page.fill('[data-testid="task-name-input"]', taskName);

    await page.locator('[data-testid="task-complexity-select"]').click();
    await page.locator('li[role="option"]', { hasText: "4" }).click();

    await page.locator('[data-testid="task-priority-select"]').click();
    await page.locator('li[role="option"]', { hasText: "Hoch" }).click();

    await page.click('[data-testid="add-task-btn"]');

    await expect(
      page.locator('[data-testid^="task-score-"]', { hasText: "12" }),
    ).toBeVisible();
  });
});
