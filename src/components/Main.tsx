import * as React from 'react'

const Main: React.FC = () => {
	return (
		// container - begin
		<div className="flex flex-col w-screen h-screen m-0 p-0">
			{/* header - begin */}
			<div className="flex w-full h-16 bg-gray-500">
				{/* menu button - begin */}
				<div className="p-4">
					<button>menu</button>
				</div>
				{/* menu button - end */}

				{/* search input - begin */}
				<input className="m-4 flex-1 px-1"></input>
				{/* search input - end */}
			</div>
			{/* header - end */}

			{/* users list conainer - begin */}
			<div className="overflow-scroll flex bg-gray-700 flex-1">
				<div className="flex-grow">
					{/* user - begin */}
					<div className="flex bg-yellow-100 flex-grow h-14 items-center p-1">
						<div className="bg-red-600 h-12 w-12 m-2 border rounded-full">
							Avatar
						</div>
						<div className="flex-grow overflow-hidden flex flex-col">
							{/* user name and message time - begin */}
							<div className="flex">
								<p className="flex-grow">User Name</p>
								<p>4:32AM</p>
							</div>
							{/* user name end message time - end */}

							{/* user message and mesage number - begin */}
							<div className="flex  overflow-hidden">
								<p className="h-6 flex-grow">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
								</p>
								<p className="rounded-xl bg-gray-400 p-1 text-xs text-center text-white">
									200
								</p>
							</div>
							{/* user message and message number - end */}
						</div>
					</div>
					{/* user - end */}

					{/* user - begin */}
					<div className="flex bg-yellow-100 flex-grow h-14 items-center p-1">
						<div className="bg-red-600 h-12 w-12 m-2 border rounded-full">
							Avatar
						</div>
						<div className="flex-grow overflow-hidden flex flex-col">
							{/* user name and message time - begin */}
							<div className="flex">
								<p className="flex-grow">User Name</p>
								<p>4:32AM</p>
							</div>
							{/* user name end message time - end */}

							{/* user message and mesage number - begin */}
							<div className="flex  overflow-hidden">
								<p className="h-6 flex-grow">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
								</p>
								<p className="rounded-xl bg-gray-400 p-1 text-xs text-center text-white">
									200
								</p>
							</div>
							{/* user message and message number - end */}
						</div>
					</div>
					{/* user - end */}
				</div>
			</div>
			{/* users list container - end */}
		</div>
		// container - end
	)
}

export default Main
