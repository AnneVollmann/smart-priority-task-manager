import { Priority } from "@/types/Task";

const priorityFactors: Record<Priority, number> = {
  Niedrig: 1,
  Mittel: 2,
  Hoch: 3,
};

export function calculatePriorityScore(
  complexity: 1 | 2 | 3 | 4 | 5,
  priority: Priority,
) {
  return complexity * priorityFactors[priority];
}
