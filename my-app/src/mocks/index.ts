export const enableMocking = async () => {
  const { worker } = await import("./browser");
  return worker.start({
    onUnhandledRequest: "bypass",
    serviceWorker: { url: `${import.meta.env.BASE_URL}mockServiceWorker.js` },
  });
};
