import AppBar from '@mui/material/AppBar';
import ImageLogo from '../../assets/images/LogoConviteInterativo.webp';

import * as S from './style';
import { Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar
      style={{
        backgroundColor: '#a716cc',
        height: '8rem',
      }}
    >
      <S.DivLogo>
        <S.ImgLogo src={ImageLogo} alt="" />
      </S.DivLogo>
      <Typography>Home</Typography>
    </AppBar>
  );
};

export default Header;
