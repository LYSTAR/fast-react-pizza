import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import Menuitem from './MenuItem';

function Menu() {
  const menu = useLoaderData();
  return (
    <div className="flex flex-wrap gap-x-4 divide-y divide-stone-200 px-2 md:gap-x-16 lg:gap-x-32">
      {menu.map((pizza) => (
        <Menuitem pizza={pizza} key={pizza.id} />
      ))}
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
