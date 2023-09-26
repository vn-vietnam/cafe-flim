import Posts from "@/components/Posts";
import Food from "./food/page";
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
