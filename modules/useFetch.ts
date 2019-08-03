import { useState } from 'react';

export type UseFetchHook = [boolean, any, (...params: any[]) => Promise<any>];

export default (
  onFetch: (...params: any[]) => Promise<any>,
  defaultValue?: any
): UseFetchHook => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(defaultValue || {});

  return [
    loading,
    data,
    (...params: any[]) => {
      setLoading(true);

      return onFetch(...params)
        .then((data: any) => {
          setLoading(false);
          setData(data);

          return data;
        })
        .catch(() => {
          setLoading(false);
        });
    }
  ];
};
