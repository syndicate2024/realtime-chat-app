import { MessageSquare, Users } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
export const useNavigation = () => {
	// Use optional chaining to handle cases where pathname might be null during SSR
	const pathname = usePathname() ?? '';

	const paths = useMemo(
		() => [
			{
				name: 'Conversations',
				href: '/conversations',
				icon: <MessageSquare />,
				active: pathname?.startsWith('/conversations') ?? false,
			},
			{
				name: 'Friends',
				href: '/friends',
				icon: <Users />,
				active: pathname?.startsWith('/friends') ?? false,
			},
		],
		[pathname]
	);
	return paths;
};
