/**
 * Merge overlapping or close time ranges based on a given threshold.
 * Example: [[0,10], [12,15]] with threshold 3 → [0,15]
 */

const mergeTimeRanges = (ranges, threshold) => {
  if (!Array.isArray(ranges) || ranges.length === 0) return [];

  // Sort all ranges by start time first
  ranges.sort((a, b) => a[0] - b[0]);

  const merged = [];
  let current = ranges[0];

  for (let i = 1; i < ranges.length; i++) {
    const next = ranges[i];

    // Check if next range is overlapping or close enough to merge
    if (next[0] <= current[1] + threshold) {
      // Merge by extending the end if needed
      current[1] = Math.max(current[1], next[1]);
    } else {
      // No overlap, push current range and move ahead
      merged.push(current);
      current = next;
    }
  }

  // Push the last range
  merged.push(current);

  return merged;
};

module.exports = { mergeTimeRanges };
