import { links } from './Links';

export const faqData = [
	{
		question: (
			<>How do I submit bug reports and / or feedback for Aim Lab Mobile?</>
		),
		answer: (
			<>
				Please follow these steps to send us your feedback. Open Settings by
				clicking the gear icon in the top right corner of the home screen. Click
				Submit a bug in the lower left corner. You can enter your email
				(optional) and a comment that explains the issue you're having or any
				thoughts you'd like to share with us. If you're submitting a bug report,
				a player log will automatically be sent as part of your submission to
				help our developers understand the nature of the issue. Remember to be
				as descriptive as possible so we can identify any issues and help you to
				the best of our ability!
			</>
		),
	},
	{
		question: <>When will Aim Lab Mobile officially release?</>,
		answer: (
			<>
				Aim Lab Mobile is available now globally (except China and Russia) as a
				Public Beta and represents the core experience of the game. That said,
				the team is hard at work developing new features and content, and we
				will be sharing more information about those upcoming updates in the
				near future.
			</>
		),
	},
	{
		question: <>Where can I download Aim Lab Mobile?</>,
		answer: (
			<>
				You can download the{' '}
				<a href={links.appleStore} target='_blank'>
					Apple App Store
				</a>{' '}
				from the app store or{' '}
				<a href={links.googleStore} target='_blank'>
					Google Play Store
				</a>
				.
			</>
		),
	},
	{
		question: (
			<>What are the minimum device requirements to play Aim Lab Mobile?</>
		),
		answer: (
			<>
				650MB Free Storage
				<br />
				2GB RAM
				<br />
				Android 5.1 or newer
				<br />
				iOS 11.0 or newer
			</>
		),
	},
	{
		question: <>Can I use my Aim Lab PC profile?</>,
		answer: (
			<>
				Yes, your Aim Lab PC profile can be used to log in to Aim Lab Mobile.
				However, your rank, progression and leaderboards are platform-specific
				and will not cross over so your Mobile achievements will differ from
				those on PC.
			</>
		),
	},
	{
		question: <>Can I use a controller with Aim Lab Mobile?</>,
		answer: (
			<>
				Yes, while the application doesn't currently support UI navigation, you
				can play tasks with a controller in Aim Lab Mobile as long as it's
				connected to your device.
			</>
		),
	},
	{
		question: <>Which languages does Aim Lab Mobile support?</>,
		answer: (
			<>
				Aim Lab Mobile supports English, German, Italian, Spanish, French,
				Portuguese, Mandarin, Japanese, and Korean.
			</>
		),
	},
];
