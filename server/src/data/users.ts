import bcrypt from 'bcrypt';

const users = async () => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash('admin123', salt);

  return [
    {
      username: 'admin',
      email: 'admin@example.com',
      password: hashedPassword,
    },
  ];
};

export default users;
