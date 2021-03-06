/*
 *  Create by xic, date: 2022/3/14
 *      _   _        .      .                         ___           |"|          _   _
 *     (_)-(_)     .  .:::.            ,,,,,         .|||.         _|_|_        '\\-//`
 *      (o o)        :(o o):  .       /(o o)\        (o o)         (o o)         (o o)
 *  ooO--(_)--Ooo-ooO--(_)--Ooo----ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-
 */
import React, { FC } from 'react'
import AppsIcon from '@mui/icons-material/Apps'
import { IHeader } from '@interfaces'
import classNames from 'classnames'
import ProjectTabs from '../ProjectTabs'

const Header: FC<any> = function ({ isOpen, handleOpen, projectList }) {
	const isActive = classNames('cursor-pointer', 'mr-2', {
		'text-orange-500': isOpen,
	})
	return (
		<div className="h-12  bg-gradient-to-r from-violet-900 to-fuchsia-500  flex items-center text-white">
			<div className="flex items-center flex-[0_0_220px]">
				<AppsIcon fontSize="large" className={isActive} onClick={handleOpen} />
				<span className="text-xl font-bold">Proj.</span>
				<span className="text-sm text-slate-400">MT</span>
			</div>
			<ProjectTabs projectList={projectList} />
		</div>
	)
}
export default Header
