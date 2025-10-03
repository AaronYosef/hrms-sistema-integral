import React, {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	return (
		<div className="items-start bg-white">
			<div className="flex flex-col items-start w-[1440px]" 
				style={{
					background: "linear-gradient(180deg, #C7EEFC, #84D1ED, #42B5DE)"
				}}>
				<div className="items-start mt-[278px] mb-[269px] mx-[479px]">
					<div className="flex flex-col items-start bg-neutral-100 w-[482px] pt-[55px] pb-[25px] rounded-xl">
						<span className="text-neutral-700 text-3xl font-bold ml-[150px]" >
							{"Inicia sesión"}
						</span>
						<span className="text-black text-lg text-center w-[323px] mb-[27px] mx-20" >
							{"Ingresa tus credenciales proporcionadas\nanteriormente"}
						</span>
						<span className="text-black text-lg mb-[7px] ml-[39px]" >
							{"Usuario"}
						</span>
						<input
							placeholder={"Juan Peréz Gonzales"}
							value={input1}
							onChange={(event)=>onChangeInput1(event.target.value)}
							className="text-black bg-neutral-100 text-lg w-[380px] py-3.5 pl-[13px] pr-[26px] mb-8 ml-[39px] mr-[63px] rounded-xl border border-solid border-[#DDDDDD]"
						/>
						<span className="text-black text-xl mb-[5px] ml-[39px]" >
							{"Contraseña"}
						</span>
						<input
							placeholder={"123456"}
							value={input2}
							onChange={(event)=>onChangeInput2(event.target.value)}
							className="text-black bg-neutral-100 text-lg w-[380px] py-4 pl-3.5 pr-7 mb-[7px] ml-[39px] mr-[63px] rounded-xl border border-solid border-[#DDDDDD]"
						/>
						<div className="flex flex-col items-end self-stretch mb-[29px]">
							<span className="text-black text-base mr-[67px]" >
								{"¿Olvidaste tu contraseña?"}
							</span>
						</div>
						<div className="flex flex-col items-start ml-[34px]">
							<button className="flex flex-col items-center bg-[#42B5DE] text-left w-[391px] py-[7px] rounded-xl border-0"
								onClick={()=>alert("Pressed!")}>
								<span className="text-[#F6FCFE] text-3xl font-bold" >
									{"Ingresar"}
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}