import type { ISidebarItem } from '../sidebar.types'
import Link from 'next/link'

interface Props {
	item: ISidebarItem
}

export const MenuItem = ({ item }: Props) => {
	return (
		<Link href={item.link}>
			<li>
				<item.icon />
				<span>{item.label}</span>
			</li>
		</Link>
	)
}
