import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaThreads, FaTwitter, FaWhatsapp, FaYoutube, FaWeixin, FaStrava } from "react-icons/fa6";

export const getPlatformIconByName = (platformName: string): JSX.Element | null => {
    switch (platformName) {
        case 'facebook': {
            return <FaFacebook size={24} className='min-w-fit' />;
        }
        case 'github': {
            return <FaGithub size={24} className='min-w-fit' />;
        }
        case 'instagram': {
            return <FaInstagram size={24} className='min-w-fit' />;
        }
        case 'linkedin': {
            return <FaLinkedin size={24} className='min-w-fit' />;
        }
        case 'threads': {
            return <FaThreads size={24} className='min-w-fit' />;
        }
        case 'twitter': {
            return <FaTwitter size={24} className='min-w-fit' />;
        }
        case 'youtube': {
            return <FaYoutube size={24} className='min-w-fit' />;
        }
        case 'whatsapp': {
            return <FaWhatsapp size={24} className='min-w-fit' />;
        }
        case 'wechat': {
            return <FaWeixin size={24} className='min-w-fit' />
        }
        case 'strava': {
            return <FaStrava size={24} className='min-w-fit' />
        }
        default:
            console.log('Platform name not supported, no icon is returned:', platformName);
            return null;
    }
}
