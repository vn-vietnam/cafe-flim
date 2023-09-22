import Posts from "@/components/Posts";
import Food from "./Food/page";
import SwiperPage from "@/components/SwiperPage";
export default function Home() {
	return (
		<div>
			<SwiperPage />
			<Posts />
			{/* <Food /> */}
		</div>
	);
}
