// Utility functions for API simulation

/**
 * Simulates an async API call with a specified delay
 * @param data The data to return after the delay
 * @param delay Delay in milliseconds (default: 1000ms)
 */
export const simulateApiCall = <T>(
  data: T,
  delay: number = 1000
): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delay);
  });
};
