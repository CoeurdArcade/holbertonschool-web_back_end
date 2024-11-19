// A weak map of endpoints and the number of calls made.
export const weakMap = new WeakMap();

// The maximum number of calls for an endpoint.
const MAX_ENDPOINT_CALLS = 5;

// Tracks the number of calls made to an API's endpoint.
export function queryAPI(endpoint) {
	// Check if the endpoint is already in the weeak map
  if (!weakMap.has(endpoint)) {
	// Initialize the call count for the endpoint
    weakMap.set(endpoint, 0);
  }
	// Increment the call count for the endpoint
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
	// Check if the call count exceeds the maximum allowed
  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
	// Throw an error if the endpoint load is high
    throw new Error('Endpoint load is high');
  }
}
