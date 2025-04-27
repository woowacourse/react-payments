import AddCard from "@/AddCard/components/AddCard";
import AddCardCompleteModal from "@/AddCard/components/AddCardCompleteModal/AddCardCompleteModal";
import { locations } from "@/AddCard/constants/locations";
import FourOFourFallback from "@/Fallback/FourOFourFallback";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AddCard />,
    },
    {
      path: locations.ADD_CARD_COMPLETE,
      element: <AddCardCompleteModal />,
    },
    {
      path: "*",
      element: <FourOFourFallback />,
    },
  ],
  {
    basename: locations.BASE_URL,
  }
);

export default router;
