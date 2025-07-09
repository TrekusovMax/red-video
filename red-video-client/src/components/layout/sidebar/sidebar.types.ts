import type { LucideIcon } from 'lucide-react'

export interface ISidebarItem {
	icon: LucideIcon
	label: string
	link: string
	isBottomBorder?: boolean
}

export interface ISidebarSubItem {
	label: string
	link: string
	avatar: string
	isLiveNow?: boolean
	isRecentUpload?: boolean
}
