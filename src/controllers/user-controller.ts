import {Request, Response} from 'express'

/**
 * @method POST
 * @url api/user
 * @access public
 */
export const createUser = async (req: Request, res: Response) => {
  res.status(501).json({error: 'Not implemented'})
}

/**
 * @method GET
 * @url api/user
 * @access public
 */
export const getUsers = async (req: Request, res: Response) => {
  res.status(501).json({error: 'Not implemented'})
}

/**
 * @method GET
 * @url api/user/:id
 * @access public
*/
export const getUser = async (req: Request, res: Response) => {
  const {id} = req.params
  res.status(501).json({error: 'Not implemented'})
}

/**
 * @method PUT
 * @url api/user/:id
 * @access private
 */
export const updateUser = async (req: Request, res: Response) => {
  const {id} = req.params
  res.status(501).json({error: 'Not implemented'})
}

/**
 * @method DELETE
 * @url api/user/:id
 * @access private
 */
export const deleteUser = async (req: Request, res: Response) => {
  const {id} = req.params
  res.status(501).json({error: 'Not implemented'})
}