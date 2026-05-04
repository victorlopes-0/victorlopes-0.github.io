import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import Switch from '@mui/material/Switch';
import { Link } from 'react-router';

const ThemeSwitch = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      slotProps={{ input: { 'aria-label': 'controlled' } }}
    />
  );
}

const Navbar = () => {
  return <nav>
    <div></div>
    <div>
    <Link to="/about">
      About
    </Link>
    </div>
    <div>
      <ThemeSwitch />
      <LanguageIcon/>
    </div>
  </nav>
}

export default Navbar