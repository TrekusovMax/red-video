import type { ISidebarSubItem } from '../../sidebar.types'
import { Dot, Radio } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
	item: ISidebarSubItem
}

export const SubItem = ({ item }: Props) => {
	return (
		<Link href={item.link}>
			<li>
				{item.avatar && (
					<Image
						src={item.avatar}
						alt={item.label}
						width={30}
						height={30}
					/>
				)}
				<span>
					<span>{item.label}</span>
					{item.isLiveNow && <Radio />}
					{item.isRecentUpload && <Dot />}
				</span>
			</li>
		</Link>
	)
}
