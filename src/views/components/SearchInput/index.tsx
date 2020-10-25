import React, { forwardRef, InputHTMLAttributes } from 'react';

import { InputWrap, Input, SearchIcon } from './styled';

export type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>((props, ref) => (
  <InputWrap>
    <SearchIcon />

    <Input type="text" placeholder="Search..." ref={ref} {...props} />
  </InputWrap>
));
