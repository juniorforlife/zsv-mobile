const login = (email: string, password: string) => {
  return new Promise((resolve) =>
    resolve({
      data: {
        userId: 1,
        token: 'ksl2saddsalak2',
        expiresIn: 120,
      },
    }),
  );
};

export default {
  login,
};
