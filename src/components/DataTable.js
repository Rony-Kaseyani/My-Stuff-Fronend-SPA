import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function DataTable({ items, title }) {
  let rows = [];
  rows =
    items &&
    items.map(item => {
      return (
        <tr key={item.id}>
          <td>
            <img
              src={`https://source.unsplash.com/100x100/?${item.title}`}
              alt=""
              width="100"
              height="100"
            />
          </td>
          <td>
            <Link to={`/product/${item.id}`}>{item.title}</Link>
          </td>
          <td>
            <b>£</b>
            {item.price}
          </td>
        </tr>
      );
    });
  return (
    <Fragment>
      <h2>
        {title
          ? title.charAt(0).toUpperCase() + title.slice(1)
          : "All Products"}
      </h2>
      <br />
      {!rows && "No products available"}
      <table>
        <tbody>{rows && rows}</tbody>
      </table>
    </Fragment>
  );
}
