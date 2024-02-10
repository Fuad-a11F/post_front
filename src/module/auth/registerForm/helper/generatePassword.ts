export const generatePassword = () => {
  const symbols =
    '12345+_)(_)(0-6789qazw@!#$%^sxedcrtfJUShlDFXCVBHJNK{L:"><MJNBHGREWQ#$%^&)(gvbyu@@hjnmuijkm,oikl,.p[;l./[];';

  let password = "";

  for (let i = 0; i < 14; i++) {
    password += symbols[Math.floor(Math.random() * symbols.length)];
  }

  return password;
};
