import { Order } from "../../types/Orders";
import { OrdersBoard } from "../OdersBoard";
import { Container } from "./styles";

const orders: Order[] = [
  {
    _id: "63742f291ed6d7a7e6349ee0",
    table: "123",
    status: "WAITING",
    products: [
      {
        product: {
          name: "Pizza quatro queijos",
          imagePath: "1668556284971-quatro-queijos.png",
          price: 40,
        },
        quantity: 3,
        _id: "63742f291ed6d7a7e6349ee1",
      },
      {
        product: {
          name: "Coca cola",
          imagePath: "1668557041821-coca-cola.png",
          price: 7,
        },
        quantity: 2,
        _id: "63742f291ed6d7a7e6349ee2",
      },
    ],
  },
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="🕐" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="👨‍🍳" title="Em preparação" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto!" orders={[]} />
    </Container>
  );
}
