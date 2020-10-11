import React, { PropsWithChildren, useEffect, useState } from 'react';
import { isObservable, Observable, Subscription } from 'rxjs';

type AsyncProps<T> = PropsWithChildren<{ observable?: Observable<T> }>;

const Async: React.FC<AsyncProps> = ({ observable, children }) => {
  const [value, setValue] = useState<T | null>(null);
  useEffect(() => {
    let subscription: Subscription;
    if (isObservable(observable)) {
      subscription = observable.subscribe(setValue);
    } else if (isObservable(children)) {
      subscription = (children as Observable<T>).subscribe(setValue);
    }
    return () => subscription.unsubscribe();
  }, [observable, children]);
  return <>{value}</>;
};

export default Async;
