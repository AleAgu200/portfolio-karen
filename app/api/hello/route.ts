// pages/api/products.js

import { cloudinaryV2 } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest, response: NextResponse) {
	console.log("🚀 ~ POST ~ request:", request);
	const data = await cloudinaryV2.search
		.expression(
			"folder:1/campañas/conecta OR folder:1/campañas/EMPRENDE OR folder:1/Campañas/fibra optica"
		)
		.max_results(30)
		.execute()
		.then((result) => {
			console.log(result);
			return result;
		});

	const products = data.resources.map((product) => ({
		title: product.asset_id,
		link: "/",
		thumbnail: product.url,
		id: product.asset_id,
	}));
	return new Response(JSON.stringify(products), {
		headers: {
			"content-type": "application/json;charset=UTF-8",
		},
	});
}
