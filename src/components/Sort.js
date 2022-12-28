import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filterContext";
import { BsList, BsFillGridFill } from "react-icons/bs";

function Sort() {
  const { gridView, setGridView, setListView, handleSort } = useFilterContext();

  return (
    <Wrapper className="sort-section">
      <div className="sorting-list--grid">
        <button
          className={gridView ? "sort-btn active" : "sort-btn"}
          onClick={setGridView}
        >
          <BsFillGridFill className="icon" />
        </button>
        <button
          className={gridView ? "sort-btn" : "sort-btn active"}
          onClick={setListView}
        >
          <BsList className="icon" />
        </button>
      </div>
      <div className="product-data">Product</div>
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="sort-selection--style"
            onClick={(event) => handleSort(event)}
          >
            <option value="low-high">Price (low-high)</option>
            <option value="high-low">Price (high-low)</option>
            <option value="A-Z">Price (A-Z)</option>
            <option value="Z-A">Price (Z-A)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  .sorting-list--grid {
    display: flex;
    gap: 2rem;
    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }
  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;
    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;

export default Sort;
