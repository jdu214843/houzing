import { useId } from "react";
const useUniquId = () => {
  const id = useId();
  return id;
};

export default useUniquId;
