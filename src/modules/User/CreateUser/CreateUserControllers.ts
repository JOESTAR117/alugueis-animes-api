import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
	async handle(req: Request, res: Response) {
		const { name, email, password } = req.body

		const createUserUseCase = new CreateUserUseCase({
			email,
			name,
			password,
		})

		const result = await createUserUseCase.execute()

		if (!name || !email || !password) {
			return res
				.status(400)
				.json('fill in all fields to create the account')
		}

		return res.status(201).json(result)
	}
}
