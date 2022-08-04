// Get user by id
export function getUser(req, res) {
  //   const { id } = req.params;
  //   const user = users[id];
  //   if (user) {
  // res.status(200).json(user);
  res.statusCode = 200
  res.json({ userName: "Jorge Burguera" })
  console.log("Hola")
  //   } else {
  //     res.status(404).json({ message: 'Usuario no encontrado' });
  //   }
}
