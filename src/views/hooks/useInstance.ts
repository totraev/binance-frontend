import { useMemo } from 'react';
import { getInstance } from 'mobx-di';

export function useInstance<T>(dep: new (...args: any[]) => T) {
  return useMemo(() => getInstance(dep), [dep]);
}
