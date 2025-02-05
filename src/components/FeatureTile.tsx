import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Feature } from "../models/Feature";

const FeatureTile = (f: Feature) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>

            <div key={f.id} className="flex justify-between cursor-pointer text-start">

                <p className='w-max' onClick={() => {

                    navigate(f.navigateTo ?? "/")

                }}>
                    {f.name}
                </p>
                {f.moreOptions &&
                    <button onClick={() => { setIsOpen(!isOpen) }}>{isOpen ? <KeyboardArrowUpOutlinedIcon /> : <KeyboardArrowDownRoundedIcon />}  </button>
                }



            </div>
            {
                isOpen && (
                    <>
                        <hr />
                        <div className='bg-gray-200 px-2 py-1' >
                            {
                                f.moreOptions && f.options!.map((f) => (
                                    <FeatureTile key={f.id} {...f} />
                                ))
                            }
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default FeatureTile