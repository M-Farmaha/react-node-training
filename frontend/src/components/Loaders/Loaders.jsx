import { RotatingLines } from "react-loader-spinner";

export const ButtonAddLoader = () => {
  return (
    <RotatingLines
      strokeColor="var(--primary-black-color)"
      strokeWidth="5"
      animationDuration="0.75"
      width="24"
      visible={true}
    />
  );
};
