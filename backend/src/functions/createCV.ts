import { Request, Response } from 'express';

export const createCV = async (req: Request, res: Response) => {
    try {
        const cvData = req.body;
        console.log('CV Data:', cvData);
        res.status(201).json({ message: 'CV created successfully', data: cvData });
    } catch (error) {
        res.status(500).json({ message: 'Error creating CV', error });
    }
};
