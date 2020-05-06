const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json({ hello: 'world'});
});

app.listen(PORT, () => console.log(`running on port ${POST}`))

