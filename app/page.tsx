import Posts from "@/components/Posts";
import Food from "./Food/page";
import SwiperPage from "@/components/SwiperPage";
export default function Home() {
	return (
		<div className="min-h-100vh">
			<SwiperPage />
			<Posts />
			{/* <Food /> */}
		</div>
	);
}
