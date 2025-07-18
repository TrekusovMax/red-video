import type { ISidebarItem } from '../sidebar.types'
import Link from 'next/link'

interface Props {
	item: ISidebarItem
}

export const MenuItem = ({ item }: Props) => {
	return (
		<li>
			<Link
				href={item.link}
				className={'group py-3 flex items-center gap-5 '}>
				<item.icon className='group-hover:text-primary transition group-hover:rotate-6 min-w-6' />
				<span>{item.label}</span>
			</Link>
			{item.isBottomBorder && <span className='h-[1px] bg-border my-5 w-full block'></span>}
		</li>
	)
}
