import { ShoppingCart } from './components/ShoppingCart';

export const metadata = {
  title: 'CounterPage',
  description: 'CounterPage description'
}

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>

      <ShoppingCart />
    </div>
  );
}