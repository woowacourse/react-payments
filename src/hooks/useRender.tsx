import { ComponentType, useEffect, useState } from 'react';
type isValidType = boolean | boolean[];

export interface RenderItemProps {
  isValid: isValidType;
}

export interface RenderItem<T> {
  Component: ComponentType<T>;
  props: T;
  isInputValid: boolean;
}

const START_INDEX = 0;

function useRender<T>(
  renderItems: RenderItem<T>[],
  ref: React.RefObject<HTMLFormElement | null>
) {
  const [renderList, setRenderList] = useState<RenderItem<T>[]>([
    renderItems[START_INDEX],
  ]);
  const [order, setOrder] = useState(START_INDEX);

  useEffect(() => {
    const currentItem = renderItems[order];

    if (
      currentItem.isInputValid &&
      ref.current &&
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
