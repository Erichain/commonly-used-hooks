type UseFetchHook = [boolean, any, (...params: any[]) => Promise<any>];

interface RectDimension {
  width: number;
  height: number;
  top: number;
  left: number;
  right: number;
  bottom: number;
}

type UseDimensionHook = [
  string | ((instance: HTMLElement | null) => void),
  RectDimension,
  HTMLElement
];
