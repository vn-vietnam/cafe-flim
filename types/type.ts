export type PostType = {
	map(arg0: (e: any) => import("react").JSX.Element): import("react").ReactNode;
	slug: String;
	desc: String;
	createdAt: String;
	title: String;
	img?: String;
	views?: Number;
	catSlug?: String;
	userEmail?: String;
	Category?: { title: String; img?: String };
	User?: { name?: String; email?: String; image?: String };
};
