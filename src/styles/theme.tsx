const systemFontFamily = 'Lato, sans-serif';

const theme = {
  grid: {
    container: '130rem',
    gap: '1.6rem',
  },
  border: {
    thickness: '0.2rem',
    radius: '0.8rem',
  },
  font: {
    family: systemFontFamily,
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xxsmall: '1rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      xmedium: '2rem',
      large: '2.4rem',
      xlarge: '3.2rem',
    },
    lineHeight: {
      xxsmall: '1.2rem',
      xsmall: '1.4rem',
      small: '2.1rem',
      medium: '2.4rem',
      xmedium: '3.0rem',
      large: '3.6rem',
      xlarge: '4.0rem',
    },
  },
  heading: {
    family: 'Montserrat, sans-serif',
    sizes: {
      h1: '4rem',
      h2: '3.2rem',
      h3: '2.8rem',
      h4: '2.4rem',
      h5: '2rem',
      h6: '1.6rem',
    },
    lineHeight: {
      h1: '5.4rem',
      h2: '4.4rem',
      h3: '4.2rem',
      h4: '3.6rem',
      h5: '2.8rem',
      h6: '2.2rem',
    },
  },
  colors: {
    primary: '#ff5601',
    primary700: '#ff5500',
    secondary: '#00ACE4',
    tertiary: '#88c8fc',
    error: '#C0392B',
    gray50: '#F4F4F4',
    gray100: '#EBEBEB',
    gray300: 'rgba(145, 145, 145, 0.5)',
    gray500: '#919191',
    background500: '#F4F4F4',
    white: '#FEFEFE',
    whiteFull: '#555454',
    black: '#212826',
    blackFull: '#000000',
  },
  shadows: {
    xxsmall: '0px 1px 2px #00000029',
    xsmall: '0px 3px 6px #00000029',
  },
  spacings: {
    xxsmall: '0.4rem',
    xsmall: '0.8rem',
    small: '1.2rem',
    medium: '1.6rem',
    large: '2rem',
    xlarge: '2.8rem',
    xxlarge: '3.6rem',
    xxxlarge: '4.4rem',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    default: '0.2s ease-in-out',
    fast: '0.1s ease-in-out',
  },
  input: {
    sizes: '4.8rem',
  },
};

export default theme;
