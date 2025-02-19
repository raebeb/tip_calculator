import { useState } from "react";
import type {MenuItem, OrderItem} from "../types";

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]);

    const addItem = (item: MenuItem) => {
        const itemExists = order.find((orderItem) => orderItem.id === item.id);
        if (itemExists) {
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1}: orderItem)
            setOrder(updatedOrder);
            return;
        }  else {
        const newItem : OrderItem = {...item, quantity: 1};
        setOrder([...order, newItem]);
        }
    }

    const removeItem = (itemId: MenuItem['id']) => {
        const updatedOrder = order.filter(orderItem => orderItem.id !== itemId);
        setOrder(updatedOrder);
    }
    return {
        order,
        addItem,
        removeItem
    }
}