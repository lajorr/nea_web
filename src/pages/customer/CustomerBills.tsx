import { useEffect } from "react";
import { useBillContext } from "../../provider/BillContext";
import { Bill } from "../../types/Bill";


const CustomerBills = () => {

    const billContext = useBillContext();

    const cols = ['Bill no.', 'Issue Date', 'Due Date', 'Units Consumed', 'Amount', 'Status', 'Action']

    useEffect(() => {
        billContext.fetchUserBills();
    }, [])

    const userBills = billContext.userBills


    const handlePayment = async (bill: Bill) => {
        const url = await billContext.getRedirectUrlForPayment(bill.id, bill.amount);

        window.location.href = url;

    }

    return (
        <div className="w-full px-4 py-2">
            <h1 className="text-2xl font-bold text-center mb-4">Customer Bills</h1>
            {userBills.length > 0 ?

                (<table className="max-w-[720] mx-auto" >

                    <thead className="text-xl" >

                        <tr className="bg-gray-300">
                            {cols.map(col => (
                                <th className="pr-12 text-center" >{col}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {userBills.map((bill) => (
                            <tr key={bill.id} className="my-2" >
                                <td className="pr-12 text-center py-4">{bill.id}</td>
                                <td className="pr-12 text-center py-4">{bill.issue_date}</td>
                                <td className="pr-12 text-center py-4">{bill.due_date}</td>
                                <td className="pr-12 text-center py-4">{bill.units_consumed}</td>
                                <td className="pr-12 text-center py-4">{bill.amount}</td>
                                <td className="pr-12 text-center py-4 font-bold" style={{ color: bill.status === 'Paid' ? '#22c55e' : 'red' }}>{bill.status}</td>
                                <td>
                                    {bill.status === 'Pending' ?

                                        (<button onClick={() => handlePayment(bill)} className="px-4 py-2 bg-blue-300 rounded-md mx-auto" >
                                            Pay Now
                                        </button>) : <p className="text-center font-bold">--</p>
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>) : (<p className="text-xl text-center">
                    You have no current bills
                </p>)
            }

        </div >
    )
}

export { CustomerBills };
