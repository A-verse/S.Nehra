import { Request, Response, NextFunction } from "express";
import prisma from "../config/prisma";

export const createContact = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ message: "Name, email and message required" });
    }

    const contact = await prisma.contact.create({
      data: { name: name.trim(), email: email.trim(), subject: subject?.trim(), message: message.trim() },
    });

    res.status(201).json({ success: true, id: contact.id });
  } catch (error) {
    next(error);
  }
};