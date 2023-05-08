/* eslint-disable no-promise-executor-return */
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export default sleep;
