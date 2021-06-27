import { TextField } from '@material-ui/core';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { TodosContext } from '../../../../contexts/todosContext';
import { debounce } from 'debounce';

interface Props {
  className?: string;
}

export function SearchBar({ className }: Props) {
  const { refresh } = useContext(TodosContext);
  const [search, setSearch] = useState<string | undefined>();
  const submitSearch = debounce(async () => {
    await refresh(search);
  }, 350);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value);
  useEffect(() => {
    submitSearch();
  }, [search]);

  return <TextField className={className} label="Search todos" value={search} onChange={onChangeSearch} />;
}
