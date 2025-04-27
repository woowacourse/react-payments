import { ComponentType, useEffect, useState } from 'react';
type isValidType = boolean | boolean[];

export interface RenderItemProps {
  isValid: isValidType;
  setIsValid: React.Dispatch<React.SetStateAction<isValidType>>;
}

export interface RenderItem {
  Component: ComponentType;
  props: RenderItemProps;
  formRef: React.RefObject<HTMLFormElement>;
}

// export interface RenderItem {
//   Component: ComponentType;
//   props: any;
// }

const START_INDEX = 0;

function useRender(
  renderItems: RenderItem[],
  ref: React.RefObject<HTMLFormElement>
) {
  const [renderList, setRenderList] = useState<RenderItem[]>([
    renderItems[START_INDEX],
  ]);
  const [order, setOrder] = useState(START_INDEX);

  useEffect(() => {
    const currentItem = renderItems[order];
    if (
      currentItem.props.isValid &&
      ref.current.checkValidity() &&
      order < renderItems.length - 1
    ) {
      setRenderList((prev) => [...prev, renderItems[order + 1]]);
      setOrder((prev) => prev + 1);
    }
  }, [renderItems, order]);

  return renderList;
}

export default useRender;
