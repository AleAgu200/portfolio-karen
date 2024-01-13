import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
var cloudinary = require("cloudinary");

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME, // add your cloud_name
	api_key: process.env.API_KEY, // add your api_key
	api_secret: process.env.API_SECRET, // add your api_secret
	secure: true,
});

export const cloudinaryV2 = cloudinary.v2;
