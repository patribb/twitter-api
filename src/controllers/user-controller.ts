import {Request, Response} from 'express'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

/**
 * @method POST
 * @url api/user
 * @access public
 */
export const createUser = async (req: Request, res: Response) => {
  const {email, name, username} = req.body
  try {
    const user = await prisma.user.findUnique({where: {email}})
    if (user) {
      return res.status(400).json({error: 'User already exists'})
    }
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        username,
        bio: 'Hello, I"m a new user!',
      },
    })
    return res.status(201).json(newUser)
  } catch (error) {
    return res.status(400).json({error: 'Server Error'})
  }
}

/**
 * @method GET
 * @url api/user
 * @access public
 */
export const getUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await prisma.user.findMany()
    res.status(200).json(allUsers)
  } catch (error) {
    res.status(500).json({error: 'Server error'})
  }
}

/**
 * @method GET
 * @url api/user/:id
 * @access public
*/
export const getUser = async (req: Request, res: Response) => {
  const {id} = req.params
  try {
    const user = await prisma.user.findUnique({where: {id: Number(id)}})
    res.status(200).json(user)
  } catch (error) {
    return res.status(500).json({error: 'Server error'})
  }
}

/**
 * @method PUT
 * @url api/user/:id
 * @access private
 */
export const updateUser = async (req: Request, res: Response) => {
  const {id} = req.params
  const {bio, image, name} = req.body
  try {
    const user = await prisma.user.update({
      where: {id: Number(id)},
      data: {
        bio,
        image,
        name,
      },
    })
    res.status(200).json(user)
  } catch (error) {
    return res.status(500).json({error: 'Error updating user'})
  }
}

/**
 * @method DELETE
 * @url api/user/:id
 * @access private
 */
export const deleteUser = async (req: Request, res: Response) => {
  const {id} = req.params
  try {
    await prisma.user.delete({where: {id: Number(id)}})
    return res.status(200).json({message: 'User deleted'})
  } catch (error) {
    return res.status(500).json({error: 'Server error'})
  }
}