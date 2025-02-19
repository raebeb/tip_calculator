import {MenuItem, OrderItem} from "../types";
import {formatCurrency} from "../helpers";

type OrderContentProps = {
    order: OrderItem[]
    removeItem: (itemId: MenuItem['id']) => void

}
export default function OrderContent({order, removeItem}: OrderContentProps) {

    return (
        <div>
            <h2 className="font-black text-4xl">Consumo</h2>
            <div className="space-y-3 mt-5">
                { order.length === 0 ?
                    <p className="text-center">No hay elementos en la orden</p> :
                order.map( item => (
                    <div key={item.id} className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b">
                        <div>
                            <p>{item.name} - {formatCurrency(item.price)}</p>
                            <p className="font-black">${item.price * item.quantity}</p>
                        </div>

                        <button
                            className="bg-red-600 w-8 h-8 rounded-full text-white font-black"
                            onClick={() => removeItem(item.id)}
                        >
                            X

                        </button>
                    </div>
                ))
                }
            </div>
        </div>
    )
}
