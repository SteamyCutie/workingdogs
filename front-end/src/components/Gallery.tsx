import Gallery1 from "../assets/img/gallery/gallery1.png";
import Gallery2 from "../assets/img/gallery/gallery1.png";
import Gallery3 from "../assets/img/gallery/gallery1.png";
import Gallery4 from "../assets/img/gallery/gallery1.png";
import GalleryItem from "../assets/svg/galleryitem";

const Gallery = () => {
  return (
    <div className="justify-center mt-[-20px]" id="gallery">
      <div className="flex justify-center font-['Trouble_Font'] text-[74px] lg:text-[100px] tracking-[5px] leading-[120px]">Gallery</div>
      <div className="flex justify-center mt-[50px] gap-[20px]">
        <GalleryItem key="Gallery1" img={Gallery1} />
        <GalleryItem key="Gallery2" img={Gallery2} />
        <GalleryItem key="Gallery3" img={Gallery3} />
        <GalleryItem key="Gallery4" img={Gallery4} />
      </div>
    </div>
  )
}

export default Gallery;