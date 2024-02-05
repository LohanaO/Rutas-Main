import React from "react";

import { Producto } from "../../types/corteResponse";
import Paginator from "../paginator/Paginator";

interface Props {
  products: Producto[];
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (selectedPage: number) => void;
}
const TableProduct = ({
  products,
  totalItems,
  itemsPerPage,
  onPageChange,
}: Props) => {
  return (
    <>
      <table className="h-full w-full border-collapse">
        <thead>
          <tr className="bg-[#ccc] rounded-full grid grid-cols-3 py-2.5 mb-4 ">
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody >
          {products?.map((product, index) => (
            <tr className="grid grid-cols-3 py-1 text-center" key={index}>
              <td>{product.nombre}</td>
              <td>{product.cantidad}</td>
              <td>{product.precio}</td>
            </tr>
          ))}
        </tbody>
        <Paginator 
        currentPage={1}
        totalPages={Math.ceil(totalItems / itemsPerPage)}
        onPageChange={onPageChange}/>
      </table>
     
      
    </>
  );
};

export default TableProduct;
