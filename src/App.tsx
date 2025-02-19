import {menuItems} from "./data/db.ts";
import useOrder  from "./hooks/useOrder.ts";
import MenuItem from "./components/MenuItem.tsx";
import OrderContent from "./components/OrderContent.tsx";
import OrderTotals from "./components/OrderTotals.tsx";
import TipPercentageForm from "./components/TipPercentageForm.tsx";

function App() {
    const { order, addItem, removeItem } = useOrder();
  return (
    <>
        <header className="bg-teal-400 py-5">
            <h1 className="text-center text-4xl font-black">Calculadora de propinas</h1>
        </header>

        <main className="max-w-7xl mx-auto py-20 grid  md:grid-cols-2">
            <div className="p-5">
                <h2 className="text-4xl font-black">Menú</h2>
                <div className="space-y-4">
                {menuItems.map((item) => (
                    <MenuItem
                        key={item.id}
                        item={item}
                        addItem={addItem}
                    />
                    ))
                }
                </div>
            </div>
           <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
               <OrderContent
                   key={order.id}
                   order={order}
                   removeItem={removeItem}
               />
               <TipPercentageForm

               />
                <OrderTotals
                     order={order}
                />
           </div>


        </main>
    </>
  )
}

export default App
