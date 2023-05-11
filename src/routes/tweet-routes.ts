import {Router} from 'express'
import { createTweet, deleteTweet, getTweet, getTweets, updateTweet } from '../controllers/tweet-controller'

const router = Router()

// Tweet CRUD
router.post('/', createTweet)
router.get('/', getTweets)
router.get('/:id', getTweet)
router.put('/:id', updateTweet)
router.delete('/:id', deleteTweet)

export default router