

const userRouter = express.Router();

userRouter
.route('/api/v1/users')
.get(getAllUsers)
.post(createUser);

userRouter
.route('/api/v1/users/:id')
.get(getUser)
.patch(updateUser)
.delete(deleteUser);
