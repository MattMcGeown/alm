import {
	FaDiscord,
	FaRedditAlien,
	FaTwitter,
	FaInstagram,
	FaFacebookSquare,
	FaTiktok,
	FaYoutube,
} from 'react-icons/fa';

export const links = {
	appleStore: 'https://apps.apple.com/us/app/aim-lab-mobile/id1616550573',
	googleStore:
		'https://play.google.com/store/apps/details?id=gg.statespace.aimlab',
};

export const socialLinks = [
	{
		label: 'Discord',
		icon: <FaDiscord />,
		position: 1,
		url: 'http://www.discord.gg/aimlab',
	},
	{
		label: 'Reddit',
		icon: <FaRedditAlien />,
		position: 2,
		url: 'https://www.reddit.com/r/aimlab',
	},
	{
		label: 'Twitter',
		icon: <FaTwitter />,
		position: 3,
		url: 'https://twitter.com/aimlabmobile',
	},
	{
		label: 'Instagram',
		icon: <FaInstagram />,
		position: 4,
		url: 'https://www.instagram.com/aimlabmobile/',
	},
	{
		label: 'Facebook',
		icon: <FaFacebookSquare />,
		position: 5,
		url: 'https://www.facebook.com/AimLabGG/',
	},
	{
		label: 'TikTok',
		icon: <FaTiktok />,
		position: 6,
		url: 'https://www.tiktok.com/@aimlabmobile',
	},
	{
		label: 'YouTube',
		icon: <FaYoutube />,
		position: 7,
		url: 'www.youtube.com/aimlab',
	},
];

export default links;
