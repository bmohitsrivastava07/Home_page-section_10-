import { Carousel } from "./Components/Carousel";
import { ExploreTopArts } from "./Components/ExploreTopArts";
import { GalleryServices } from "./Components/GalleryServices";
import { Heros } from "./Components/Heros";

export const HomePage = () => {
    return (
        <>
        <ExploreTopArts />
        <Carousel />
        <Heros />
        <GalleryServices/>
        </>
    );
}