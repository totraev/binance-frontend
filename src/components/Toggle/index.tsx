import React, { FC, memo } from 'react';

import { DisplayVolume } from 'interfaces/application';

import { ToggleWrap, RadioButton, RadioLabel } from './styled';

interface ToggleProps {
  value: DisplayVolume;
  className?: string;
  onSelect: (value: DisplayVolume) => void;
}

export const Toggle: FC<ToggleProps> = memo(({ value, onSelect, className }) => (
  <ToggleWrap className={className}>
    <RadioLabel onClick={() => onSelect(DisplayVolume.Change)}>
      <RadioButton active={value === DisplayVolume.Change} />
      &nbsp; Change
    </RadioLabel>

    <RadioLabel onClick={() => onSelect(DisplayVolume.Volume)}>
      <RadioButton active={value === DisplayVolume.Volume} />
      &nbsp; Volume
    </RadioLabel>
  </ToggleWrap>
));
