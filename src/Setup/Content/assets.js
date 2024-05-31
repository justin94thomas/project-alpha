import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
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
import AlphaVector from '../../Assets/SVGs/alpha-vector.svg';

const images = {
    marketplaceLogo: 'https://as2.ftcdn.net/v2/jpg/01/95/78/87/1000_F_195788717_Ba8397mYBadW3JUx5SQejAxpRN02DyEF.jpg',
    emptyCart: 'https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png',
    image404: 'https://static.vecteezy.com/system/resources/previews/016/462/237/original/website-under-construction-illustration-concept-on-white-background-vector.jpg',
    blockbusterLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Blockbuster_logo.svg/1200px-Blockbuster_logo.svg.png',
    movieTicket: 'https://media.istockphoto.com/id/1177049680/vector/movie-tickets-vector-cinema-ticket-design.jpg?s=612x612&w=0&k=20&c=6gZIUIPsNas6jCs-Vh3SeX7kTu6zGFUEVZDLdQHDvCc='
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
    AlphaLogo: AlphaVector,
    TicketIcon: IoTicketSharp
}

export { images, icons }