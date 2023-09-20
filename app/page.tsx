import Posts from "@/components/Posts";
import Food from "./Food/page";

export default function Home() {
	return (
		<div className="min-h-100vh">
			<Posts />
			<Food />
		</div>
	);
}
