import { useDrawerDispatch, useDrawerState } from "../context/DrawerContext";

export default function useDrawer() {
  const drawerState = useDrawerState();
  const drawerDispatch = useDrawerDispatch();

  const openDrawer = () => {
    drawerDispatch.setIsDrawerOpen(true);
  };
  const closeDrawer = () => {
    drawerDispatch.setIsDrawerOpen(false);
  };

  return { isDrawerOpen: drawerState.isDrawerOpen, openDrawer, closeDrawer };
}
