import { useEffect, useState } from "react";

type UseListReturn<T> = {
  list: T[];
  add: (listItem: T) => void;
  update: (listItem: T, updatedItem: T) => void;
  remove: (listItem: T) => void;
};

export const useList = <T>(key: string, defaultValue: T[] = []): UseListReturn<T> => {
  const [list, setList] = useState<T[]>(() => {
    const stored = localStorage.getItem(key);
    return stored ? (JSON.parse(stored) as T[]) : defaultValue;
  });

  const add = (listItem: T) => {
    const newList = [...list, listItem];
    setList(newList);
  };

  const update = (listItem: T, updatedItem: T) => {
    setList(list.map((item) => (item === listItem ? updatedItem : item)));
  };

  const remove = (listItem: T) => setList(list.filter((task) => task !== listItem));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(list));
  }, [list]);

  return { list, add, update, remove };
};
