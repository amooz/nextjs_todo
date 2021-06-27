import { TextField } from '@material-ui/core';
import React, { ChangeEvent, useContext } from 'react';
import { TodosContext } from '../../../../contexts/todosContext';
import { debounce } from 'debounce';

interface Props {
  className?: string;
}

export function SearchBar({ className }: Props) {
  const { refresh } = useContext(TodosContext);
  const submitSearch = debounce(async (search?: string) => {
    await refresh(search);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const searchValue = value.trim() === '' ? undefined : value;
    submitSearch(searchValue);
  };

  return <TextField className={className} label="Search todos" onChange={onChangeSearch} />;
}
