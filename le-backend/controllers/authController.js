const users = [];

export function register(req, res) {
  const { name, email, password, type } = req.body;
  // database insert
  users.push({ id: Math.random() * 10, name, email, password, type });
  // send response
  res.status(201).json({ isSuccess: true, users });
}

export function login(req, res) {}
