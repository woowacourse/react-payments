import { LENGTH } from "./constants";

const formatOwnerName = name =>
  name.length <= LENGTH.DISPLAYED_OWNER_NAME_MAX ? name : name.slice(0, LENGTH.DISPLAYED_OWNER_NAME_MAX) + "...";

export default formatOwnerName;
