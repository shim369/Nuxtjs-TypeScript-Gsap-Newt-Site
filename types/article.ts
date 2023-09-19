export interface Article {
    _id: string
    title: string
    slug: string
    body: string
	coverImage: HTMLImageElement
	category: {
		name: string
	}
	date: Date
}