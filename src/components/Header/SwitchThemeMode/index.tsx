import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleThemeMode, uiSelector } from 'store/ui';

import Icon from 'utils/Icon';

import { SwitchThemeModeButton } from './styles';

const SwitchThemeMode: React.FC = () => {
  const { themeMode } = useSelector(uiSelector);
  const dispatch = useDispatch();

  return (
    <SwitchThemeModeButton onClick={() => dispatch(toggleThemeMode())}>
      <Icon icon={themeMode === 'light' ? 'moon' : 'sun'} />
    </SwitchThemeModeButton>
  );
};

export default SwitchThemeMode;
