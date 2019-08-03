import { useState, useCallback, useLayoutEffect } from 'react';
// ResizeObserver is an experimental feature and can be supported by few browsers
// So use polyfill instead
// For more detail: https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
import ResizeObserver from 'resize-observer-polyfill';

export interface RectDimension {
  width: number;
  height: number;
  top: number;
  left: number;
  right: number;
  bottom: number;
}

export type UseDimensionHook = [
  string | ((instance: HTMLElement | null) => void),
  RectDimension,
  HTMLElement
];

const getRectDimension = (node: HTMLElement): RectDimension => {
  return node.getBoundingClientRect();
};

export default (): UseDimensionHook => {
  const [dimensions, setDimensions] = useState<RectDimension>(
    {} as RectDimension
  );
  const [node, setNode] = useState();
  const nodeRef = useCallback(node => {
    if (node != null) {
      setNode(node);
    }
  }, []);

  useLayoutEffect(() => {
    if (!node) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      setDimensions(getRectDimension(node));
    });

    resizeObserver.observe(node);

    return () => {
      resizeObserver.unobserve(node);
    };
  }, [node]);

  return [nodeRef, dimensions, node];
};
