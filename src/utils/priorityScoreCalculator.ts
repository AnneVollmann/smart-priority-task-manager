import { Priority } from "@/types/Task";

const priorityFactors: Record<Priority, number> = {
  Niedrig: 1,
  Mittel: 2,
  Hoch: 3,
};

/**
 * Calculates the priority score based on complexity and priority factor.
 *
 * @param complexity - Value between 1 and 5.
 * @param priority - Task priority level.
 * @returns The calculated priority score.
 */
export function calculatePriorityScore(
  complexity: 1 | 2 | 3 | 4 | 5,
  priority: Priority,
) {
  return complexity * priorityFactors[priority];
}
