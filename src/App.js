import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { MdOutlineDashboard } from 'react-icons/md'
import { FaUserNurse, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function App() {
	const [open, setOpen] = useState(true)
	const menus = [
		{ name: 'Dashboard', link: '/', icon: MdOutlineDashboard },
		{ name: 'Personal', link: '/', icon: FaUserNurse },
		{ name: 'Patients', link: '/', icon: FaUser },
		{ name: 'Dashboard', link: '/', icon: MdOutlineDashboard },
		{ name: 'Personal', link: '/', icon: FaUserNurse },
		{ name: 'Patients', link: '/', icon: FaUser },
	]
	return (
		<div>
			<section className='flex gap-6'>
				<div
					className={`bg-[#0e0e0e] min-h-screen ${
						open ? 'w-72' : 'w-16'
					}  text-gray-100 px-4 duration-500`}>
					<div className='py-3 flex justify-end'>
						<HiMenuAlt3
							size={26}
							className='cursor-pointer'
							onClick={() => setOpen(!open)}
						/>
					</div>
					<div className='mt-4 flex flex-col gap-4 relative '>
						{menus?.map((menu, i) => (
							<Link
								to={menu?.link}
								key={i}
								className='flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md'>
								<div>
									{React.createElement(menu?.icon, {
										size: '20',
									})}
								</div>
								<h2
									style={{
										transitionDelay: `${i + 3}00ms`,
									}}
									className={`whitespace-pre duration-500 ${
										!open &&
										'opacity-0 translate-x-28 overflow-hidden'
									} `}>
									{menu?.name}
								</h2>
							</Link>
						))}
					</div>
				</div>
				<div className='m-3 text-xl text-gray-900 font-semibold'>
					REACT TAILWIND
				</div>
			</section>
		</div>
	)
}

export default App
