import { Reorder } from "framer-motion";
import { useEffect, useState } from "react";
import { PasswordDataInterface } from "../../Interface/Password";

import SinglePassword from "../Modal/SinglePassword";

function RenderGroups({ savedPasswords }: { savedPasswords: PasswordDataInterface[] }) {
  const [items, setItems] = useState(savedPasswords);

  useEffect(() => {
    console.log("render group");
    console.log("render ", savedPasswords);
  });

  const handleDelete =async (id: string) => {
    setItems(items.filter(item => item.id !== id));
    
  };

  return (
    <div className="overflow-y-auto overflow-x-auto">
    <Reorder.Group axis="y" values={items} onReorder={setItems} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {items.map((password) => (
        <Reorder.Item key={password.id} value={password} className="w-full">
         <SinglePassword password={password} action={handleDelete}/>
        </Reorder.Item>
      ))}
    </Reorder.Group>
    </div>
  );
}

export default RenderGroups;
