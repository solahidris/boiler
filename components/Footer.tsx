import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram,FaFacebook,FaLinkedin } from "react-icons/fa6";

const Footer = () => {

    const itemContainerCss = "flex items-center gap-1.5 max-w-[320px]";
    const iconContainerCss = "bg-white min-w-6 min-h-6 flex justify-center items-center rounded-full";
    const infoTextCss = "primary-font text-sm font-[200] tracking-wider";
    const gridContainerCss = "flex flex-col gap-4 w-full text-start";

    const footer = {
        title: "Let’s Start Your Health Journey Together",
        description: "Reach out to us to schedule an appointment or ask any questions.",
        button: "book an appointment",
        buttonUrl: "/services",
        info: { image: "/header_logo.png", address: "18, Jalan Opera G U2/G, Taman TTDI Jaya, 40150 Shah Alam, Selangor", mail: "hello@mediklinikttdijaya.com", whatsapp: "011-1545 8018" },
        socials: { instagram: "/", facebook: "/", linkedin:"/" },
        hours: { title: "Operating Hours", weekdays: "8:30 am - 10:00 pm", weekend: "8:30 am - 5:00 pm", holidays: "Closed" },
        links: [ {name: "About Us", url:"/about"}, {name: "Services", url:"/services"}, {name: "Blog", url:"/blog"}, {name: "Contact Us", url:"/contact"}],
    }

    return (
        <div className="h-[590px] w-full tertiary-bg text-white flex gap-16 p-[100px]">

            <div className="w-full flex flex-col justify-center items-center text-center gap-16">
                
                <div className="flex w-full">
                    <div className="flex flex-col gap-3 w-full text-start">
                        <p className="primary-font font-[500] uppercase tracking-widest text-2xl">{footer.title}</p>
                        <p className="secondary-font font-[300] tracking-wider">{footer.description}</p>
                    </div>
                    <Link href={footer.buttonUrl} className="flex justify-end w-full">
                        <button className="button-primary max-h-[46px]">{footer.button}</button>
                    </Link>
                </div>

                <div className="grid grid-cols-3 justify-center gap-32 w-full">
                    <div className={`${gridContainerCss}`}>
                        <Link href="/">
                            <Image src={footer.info.image || "/header_logo.png"} alt="header_logo" width={400} height={400} className="max-w-[225px] h-auto -ml-1.5 -mt-3" />
                        </Link>
                        <div className={itemContainerCss}>
                            <div className={iconContainerCss}><MapPinIcon className="tertiary-color h-4 w-4"/></div>
                            <p className={infoTextCss}>{footer.info.address}</p>
                        </div>
                        <div className={itemContainerCss}>
                            <div className={iconContainerCss}><MailIcon className="tertiary-color h-4 w-4 p-[1px]"/></div>
                            <p className={infoTextCss}>{footer.info.mail}</p>
                        </div>
                        <div className={`${itemContainerCss} mt-1.5`}>
                            <div className={iconContainerCss}><PhoneIcon className="tertiary-color h-4 w-4 p-[1px]"/></div>
                            <p className={infoTextCss}>{footer.info.whatsapp}</p>
                        </div>
                        <div className={`${itemContainerCss} mt-4`}>
                            <Link href={footer.socials.instagram} className={iconContainerCss}><FaInstagram className="tertiary-color h-4 w-4 p-[1px]"/></Link>
                            <Link href={footer.socials.facebook} className={`${iconContainerCss} mx-2`}><FaFacebook className="tertiary-color h-4 w-4 p-[1px]"/></Link>
                            <Link href={footer.socials.linkedin} className={iconContainerCss}><FaLinkedin className="tertiary-color h-4 w-4 p-[1px]"/></Link>
                        </div>
                    </div>

                    <div className={`${gridContainerCss}`}>
                        <p className="primary-font font-[500] uppercase tracking-widest mb-3">{footer.hours.title}</p>
                        <div className="flex gap-2 items-center">
                            <p className="secondary-font font-[600] tracking-wider">Monday - Friday:</p>
                            <p className={infoTextCss}>{footer.hours.weekdays}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="secondary-font font-[600] tracking-wider">Saturday - Sunday:</p>
                            <p className={infoTextCss}>{footer.hours.weekend}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="secondary-font font-[600] tracking-wider">Public Holidays:</p>
                            <p className={infoTextCss}>{footer.hours.holidays}</p>
                        </div>
                    </div>

                    <div className={`${gridContainerCss}`}>
                        <p className="primary-font font-[500] uppercase tracking-widest mb-3">{`Links`}</p>
                        {footer.links.map((link, key)=>(<div key={key} className="flex gap-2 items-center">
                            <p className={infoTextCss}>{link.name}</p>
                        </div>))}
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Footer;