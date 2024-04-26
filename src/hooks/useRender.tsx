import { useState } from 'react';

interface Props {
  children: string[];
}

const useRender = ({ children }: Props) => {
  const [render, setRender] = useState(null as Step | null);
  const renderComponent = children.find((child) => child === render);

  return { renderComponent, setRender };
};

export default useRender;
