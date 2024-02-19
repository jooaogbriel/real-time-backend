import { Request, Response } from "express"
import { listUserByIdService } from "../../shared/services/user/listUserById.service"

const listUserByIdController = async(req: Request, res: Response) => {
    try {
        const { id } = req.params
        const user = await listUserByIdService(id)
        return res.json(user)
    } catch (error) {
        if (error instanceof Error) {
			return res.status(400).json({
				message: error.message,
			})
		}
    }
}
export { listUserByIdController }