/*
 *  Create by xic, date: 2022/5/16
 *      _   _        .      .                         ___           |"|          _   _
 *     (_)-(_)     .  .:::.            ,,,,,         .|||.         _|_|_        '\\-//`
 *      (o o)        :(o o):  .       /(o o)\        (o o)         (o o)         (o o)
 *  ooO--(_)--Ooo-ooO--(_)--Ooo----ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-
 */
import React, {
	useLayoutEffect,
	FC,
	MouseEvent,
	useState,
	useMemo,
} from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import CloseIcon from '@mui/icons-material/Close'
import { IProjectTabs } from '../../interfaces'
import classNames from 'classnames'
import { v4 as uuidv4 } from 'uuid'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'

const TAB_WIDTH = 144
const ProjectTabs: FC<IProjectTabs> = function ({
	projectList = [{ a: 1 }, { a: 1 }, { a: 1 }, { a: 1 }, { a: 1 }],
}) {
	const myRef = React.createRef<HTMLDivElement>()
	const [showScroll, setShowScroll] = useState<boolean>(false)
	const [selectProject, setSelectProject] = useState<any>('')
	useLayoutEffect(() => {
		shouldShowScroll()
		window.addEventListener('resize', shouldShowScroll)
	}, [shouldShowScroll])
	const scrollStyle = useMemo(
		() =>
			classNames(
				'bg-[#FF7179]/80 flex justify-center items-center cursor-pointer opacity-0',
				{
					'opacity-100': showScroll,
				}
			),
		[showScroll]
	)
	// 项目tabs
	const projectTabs = useMemo(
		() =>
			projectList.map((item) => {
				const styles = classNames(
					'relative ' +
						'shrink-0 basis-36 h-full ' +
						'bg-[#6D417D]/80 mr-2 flex ' +
						'justify-center cursor-pointer ' +
						'items-center border-rose-600',
					{
						'border-t-4': true,
					}
				)
				const uuid = uuidv4()
				return (
					<div
						className={styles}
						onClick={() => handleSelectProject()}
						key={uuid}
					>
						<span className="inline-block truncate max-w-[98px]">
							1222222222222223232
						</span>
						<CloseIcon
							fontSize="small"
							className="absolute right-2 cursor-pointer"
							onClick={(e) => handleCloseProject(e)}
						/>
					</div>
				)
			}),
		[projectList, selectProject]
	)
	//滚动
	function handleScroll(isRight: boolean): void {
		myRef.current?.scrollBy({
			behavior: 'smooth',
			left: isRight ? 200 : -200,
		})
	}
	// 是否出现滚动条
	function shouldShowScroll() {
		if (myRef.current) {
			let containerWidth = myRef.current.clientWidth
			setShowScroll(projectList.length * TAB_WIDTH > containerWidth)
		}
	}
	// 选择项目
	function handleSelectProject() {
		console.log(1)
	}
	// 关闭项目
	function handleCloseProject(e: MouseEvent) {
		e.stopPropagation()
		console.log(2)
	}
	return (
		<div className="flex w-full h-full">
			<div className={scrollStyle} onClick={() => handleScroll(false)}>
				<ArrowBackIosNewIcon />
			</div>
			<div
				className="flex h-full overflow-x-auto scroll-smooth w-11/12  ml-2"
				ref={myRef}
			>
				{projectTabs}
			</div>
			<div className={scrollStyle} onClick={() => handleScroll(true)}>
				<ArrowForwardIosIcon />
			</div>
		</div>
	)
}
export default ProjectTabs
