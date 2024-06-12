import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { PiSneakerDuotone } from "react-icons/pi";
import { IoShirtOutline, IoTicketSharp } from "react-icons/io5";
import { BiCameraMovie } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { MdSlowMotionVideo } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdEventSeat } from "react-icons/md";
import { MdOutlineSpaceBar } from "react-icons/md";
import { BsSpeakerFill } from "react-icons/bs";

const images = {
    marketplaceLogo: 'https://projectalpha9216.blob.core.windows.net/project-alpha/Images/marketplace-logo.jpg',
    emptyCart: 'https://projectalpha9216.blob.core.windows.net/project-alpha/Images/empty-cart.jpg',
    image404: 'https://projectalpha9216.blob.core.windows.net/project-alpha/Images/under-construction.jpg',
    blockbusterLogo: 'https://projectalpha9216.blob.core.windows.net/project-alpha/Images/Blockbuster_logo.svg.png',
    movieTicket: 'https://projectalpha9216.blob.core.windows.net/project-alpha/Images/movie-ticket.jpg'
}
const icons = {
    MenuIcon: MenuIcon,
    AccountCircleIcon: AccountCircleIcon,
    Sneakers: PiSneakerDuotone,
    Clothing: IoShirtOutline,
    BookingsIcon: BiCameraMovie,
    RatingsStarIcon: FaRegStar,
    VideoRuntime: MdSlowMotionVideo,
    Sidebar: FaBars,
    Close: IoMdCloseCircleOutline,
    Seat: MdEventSeat,
    MovieScreen: MdOutlineSpaceBar,
    Speaker: BsSpeakerFill,
    AlphaLogo: 'https://projectalpha9216.blob.core.windows.net/project-alpha/SVGs/alpha-vector.svg',
    TicketIcon: IoTicketSharp
}

export { images, icons }