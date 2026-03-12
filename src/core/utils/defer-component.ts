import { lazy, ComponentType } from "react";

export const deferComponent = <TProps, TModule>(
  importFunc: () => Promise<TModule>,
  selector: (module: TModule) => ComponentType<TProps>,
) => {
  return lazy(() => importFunc().then((module) => ({ default: selector(module) })));
};
