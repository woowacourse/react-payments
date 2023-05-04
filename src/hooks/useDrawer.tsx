import { useDrawerContext } from "../context/DrawerContext";

export default function useDrawer() {
  const context = useDrawerContext();
  const { isDrawerOpen, setIsDrawerOpen } = context;

  const openDrawer = () => setIsDrawerOpen(true);

  const closeDrawer = () => setIsDrawerOpen(false);

  return { isDrawerOpen, openDrawer, closeDrawer };
}
