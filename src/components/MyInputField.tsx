import { useRef } from "react";

const MyInputField = (prop: any) => {
    const fieldRef = useRef(null);
    return (
        <div className="">
            <p className="text-[12px]" onClick={() => {
            }} >{prop.fieldName}</p>
            <input ref={fieldRef} name={prop.name} type={prop.type} placeholder={prop.placeHolder} className="text-[16px]  border border-black/30 rounded-[4px] px-4 py-2 w-[300px]" />
        </div>
    )
}

export default MyInputField