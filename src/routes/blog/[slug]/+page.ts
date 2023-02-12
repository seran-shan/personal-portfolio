import { ArticleEndPoint } from '$lib/Constants';

export async function load({ params, fetch }: { params: { slug: string }; fetch: any }) {
	const response = await fetch(`${ArticleEndPoint}/${params.slug}`);
	return {
		article: response.ok && (await response.json())
	};
}
