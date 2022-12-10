const PORT = process.env.PORT || 5000
const Application = require('./framework/Application');
const userRouter = require('./src/user-router.js')
const jsonParser = require('./framework/parseJason')

const app = new Application();

app.use(jsonParser)

app.addRouter(userRouter)

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
