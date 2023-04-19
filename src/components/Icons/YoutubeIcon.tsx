import React from 'react';

type YoutubeIconProps = React.ComponentPropsWithRef<'svg'>;

export const YoutubeIcon = (props: YoutubeIconProps) => {
	return (
		<svg width="17" height="13" viewBox="0 0 17 13" fill="black" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M13.8305 0.328839C11.3077 0.156639 5.68881 0.157339 3.16951 0.328839C0.441606 0.515039 0.120306 2.16284 0.100006 6.50004C0.120306 10.8295 0.438806 12.4843 3.16951 12.6712C5.68951 12.8427 11.3077 12.8434 13.8305 12.6712C16.5584 12.485 16.8797 10.8372 16.9 6.50004C16.8797 2.17054 16.5612 0.515739 13.8305 0.328839ZM6.40001 9.30004V3.70004L12 6.49514L6.40001 9.30004Z" />
		</svg>
	)
};
