import Carousel from "@/components/Carousel";
import Posts from "@/components/Posts";
import SwiperPage from "@/components/SwiperPage";

const dataTypeUpcomming = {
	name: "Top movies",
	endPoint: "upcoming",
};
export default function Home() {
	return (
		<div className="min-h-100vh">
			<SwiperPage />
			<Carousel dataType={dataTypeUpcomming} />
			<Posts />
		</div>
	);
}
