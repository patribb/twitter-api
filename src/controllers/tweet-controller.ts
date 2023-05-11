import {Request, Response} from 'express'

/**
 * @method POST
 * @url api/tweet
 * @access public
 */
export const createTweet = async (req: Request, res: Response) => {
  res.status(501).json({error: 'Not implemented'})
}

/**
 * @method GET
 * @url api/tweet
 * @access public
 */
export const getTweets = async (req: Request, res: Response) => {
  res.status(501).json({error: 'Not implemented'})
}

/**
 * @method GET
 * @url api/tweet/:id
 * @access public
*/
export const getTweet= async (req: Request, res: Response) => {
  const {id} = req.params
  res.status(501).json({error: 'Not implemented'})
}

/**
 * @method PUT
 * @url api/tweet/:id
 * @access private
 */
export const updateTweet = async (req: Request, res: Response) => {
  const {id} = req.params
  res.status(501).json({error: 'Not implemented'})
}

/**
 * @method DELETE
 * @url api/tweet/:id
 * @access private
 */
export const deleteTweet = async (req: Request, res: Response) => {
  const {id} = req.params
  res.status(501).json({error: 'Not implemented'})
}