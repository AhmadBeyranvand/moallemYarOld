import { DollarCircleTwoTone, QuestionCircleTwoTone, RocketTwoTone, SettingTwoTone } from "@ant-design/icons"

export default function OptionBox(props) {
	let icon = <QuestionCircleTwoTone />
	let style = { "fontSize": "32pt", color: "#fff", fill: "#fff" }
	let color = "#3b82f6"
	let className = "p-5 bg-white shadow-lg rounded-xl z-20"

	switch (props.icon) {
		case 'gear':
			icon = <SettingTwoTone className={className} style={style} />
			break
		case 'light':
			color = "#e53935"
			icon = <RocketTwoTone className={className} twoToneColor={color} style={style} />
			break
		case 'dollar':
			color = "#4caf50"
			icon = <DollarCircleTwoTone className={className} twoToneColor={color} style={style} />
			break
		default:
			break

	}


	return (
		<div className="flex flex-col lg:w-4/12 sm:w-full   justify-center text-center relative">
			<div className="-mb-5 z-20">
				{icon}
			</div>
			<div className="mx-2 px-5 pb-5 pt-9 bg-white hover:bg-amber-400 rounded-xl shadow-2xl flex flex-col optionBox" >
				<div className="text-xl font-bold"> {props.title} </div>
				<p className="text-justify my-3"> {props.children} </p>
			</div>
		</div>
	)
}