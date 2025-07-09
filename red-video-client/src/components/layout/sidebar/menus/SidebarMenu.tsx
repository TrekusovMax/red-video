import type { ISidebarItem } from '../sidebar.types'
import { MenuItem } from './MenuItem'

interface Props {
	title?: string
	menu: ISidebarItem[]
}

export const SidebarMenu = ({ menu, title }: Props) => {
	return (
		<nav>
			{title && <div>{title}</div>}
			<ul>
				{menu.map(menuItem => (
					<MenuItem
						item={menuItem}
						key={menuItem.label}
					/>
				))}
			</ul>
		</nav>
	)
}
