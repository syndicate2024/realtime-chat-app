'use client';

import './globals.css';
import { ConvexClientProvider } from '@/providers/ConvexClientProvider';
import { Inter } from 'next/font/google';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ConvexClientProvider>
					<TooltipProvider>{children}</TooltipProvider>
				</ConvexClientProvider>
			</body>
		</html>
	);
}
