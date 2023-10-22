// UserComponent.js

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "font-awesome/css/font-awesome.min.css";
import { Row, Col, Button, Table } from "reactstrap";
import { fetchUsersRequest } from "../Redux/action";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { FiPrinter } from "react-icons/fi";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import Avocado from '../Images/Avocado.jpg';

function UserComponent() {
  const [columnName, setColumnName] = useState([]);
  const [state, setState] = useState([]);

  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, []);

  useEffect(() => {
    if (products?.length) {
      setState(products);
      let x = Object.keys(products?.[0]);
      x.push("Status");
      setColumnName(x);
    }
  }, [products]);

  const handleShowApproved = (value) => {
    const x = [...state];
    const y = x.map((i) => ({
      ...i,
      status: i.product_name === value.product_name ? "Approve" : i?.status,
    }));
    setState(y);
  };

  const handleShowMissing = (value) => {
    const x = [...state];
    const y = x.map((i) => ({
      ...i,
      status: i.product_name === value.product_name ? "Missing" : i?.status,
    }));
    setState(y);
  };
  return (
    <div>
      <div className="bg-header">
        <div className="left-header-text">
          <h3 className="header-text">Reeco</h3>
          <p className="header-text pt-2">Store</p>
          <p className="header-text pt-2">Orders</p>
          <p className="header-text pt-2">Analytics</p>
        </div>
        <div className="right-header-text">
          <AiOutlineShoppingCart className="cart-icon pb-1" />
          <p className="header-right-text pt-2">Hello, James</p>
          <MdKeyboardArrowDown className="down-icon pb-2" />
        </div>
      </div>
      <div className="second-container">
        <div className="order-container pt-2">
          <p>Orders</p>
          <MdKeyboardArrowRight className="down-icon" />
          <p className="order-underline">Orders 3456789AC</p>
        </div>

        <div className="order-container-2">
          <div className="orders-number">
            <h4 className="pr-2">Orders</h4>
            <h4 className="order-number pt-1">3456789AC</h4>
          </div>
          <div className="button-container">
            <Button className="button-position mr-3">Back</Button>
            <Button className="button-style">Approve Order</Button>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div class="divider">
          <div>
            <p>Supplier</p>
            <p className="rectangle-content">East coast fruits & vegetables</p>
          </div>
        </div>
        <div class="divider">
          <div>
            <p>Shipping Date</p>
            <p className="rectangle-content">Tus, Feb 10</p>
          </div>
        </div>
        <div class="divider">
          <div>
            <p>Total</p>
            <p className="rectangle-content">$ 10,4345.7 </p>
          </div>
        </div>
        <div class="divider">
          <div>
            <p>Category</p>
            <p className="rectangle-content">Vegetables</p>
          </div>
        </div>
        <div class="divider">
          <div>
            <p>Status</p>
            <p className="rectangle-content">Awaiting your approvel</p>
          </div>
        </div>
      </div>
      <div className="table-container  mt-3">
        <div className="search-button">
        <div className="search-box mt-4">
          <input className="inputField" type="text" placeholder="Search..." />
          <i
            className="fa fa-search fa-lg searchIcons user-guide-search-icon"
            style={{ fontSize: "16px" }}
          ></i>
        </div>
        <div className="mt-5">
          <button className="button-position">Add Items</button>
          <FiPrinter className="printer-icon"/>
        </div>
        </div>
        <div className="m-4">
          <table >
            <thead>
              <tr>
                {columnName?.map((column, index) => (
                  <th key={index}>
                    {column === "product_name" ? "Product Name" : column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {state?.map((product, index) => (
                <tr key={index}>
                  <td style={{textAlign:'start'}}> <img src={Avocado} className="avacodo-img" />{product.product_name}</td>
                  <td>{product.Brand}</td>
                  <td>${product.Price}</td>
                  <td>{product.Quantity}</td>
                  <td>${product.Total.toFixed(2)}</td>
                  <td>
                    {product?.status === "Approve" ? (
                      <button key={index} className="Approved-btn">
                        Approved
                      </button>
                    ) : product?.status === "Missing" ? (
                      <button key={index} className="Approved-btn Missing-btn">
                        Missing
                      </button>
                    ) : null}
                  </td>
                  <td>
                    <TiTick
                      onClick={() => handleShowApproved(product)}
                      className={
                        product?.status === "Approve" ? "blue-tick" : ""
                      }
                    />
                  </td>
                  <td>
                    <RxCross2
                      onClick={() => handleShowMissing(product)}
                      className={
                        product?.status === "Missing" ? "red-tick" : ""
                      }
                    />
                  </td>
                  <td>Edit</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserComponent;
