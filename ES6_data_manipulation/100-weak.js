// A weak map of endpoints and the number of calls made.
export const weakMap = new WeakMap();

// The maximum number of calls for an endpoint.
const MAX_ENDPOINT_CALLS = 5;

// Tracks the number of calls made to an API's endpoint.
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) weakMap.set(endpoint, 0);
  const count = weakMap.get(endpoint);
  weakMap.set(endpoint, count + 1);
  if (count + 1 > MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
