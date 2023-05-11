import express from 'express'
import userRoutes from './routes/user-routes'
import tweetRoutes from './routes/tweet-routes'

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

// routes
app.use('/api/user', userRoutes)
app.use('/api/tweet', tweetRoutes)

app.listen(PORT, () => console.log(`🚀 Server listening on PORT ${PORT}`))