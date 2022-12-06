const PORT = process.env.PORT || 5000
const Application = require('./framework/Application');
const Router = require('./framework/Router')


const app = new Application();

const router = new Router();

router.get('/users', (req, res) => {
    res.end('*/users*')
})
router.get('/posts', (req, res) => {
    res.end('*/posts*')
})

app.addRouter(router)
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
