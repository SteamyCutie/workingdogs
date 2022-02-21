type Props = {
  img: any
};

const GalleryItem = ({ img }: Props) => {
  return (
    <svg width="295" height="350" viewBox="0 0 295 350" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect width="295" height="350" fill="url(#pattern0)"/>
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_162_2" transform="translate(-0.0932203) scale(0.00148305 0.00125)"/>
        </pattern>
        <image id="image0_162_2" width="800" height="800" href={ img } />
      </defs>
    </svg>
  )
}

export default GalleryItem;