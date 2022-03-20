import ReactPaginate from "react-paginate";
import { LabelWrapper } from "./styles";
import PropTypes from "prop-types";

const Pagination = (props) => {
  const {
    page: initPage,
    sizePerPage = 1,
    totalSize = 0,
    displayRanges = 5,
    marginPage = 1,
    onPageChange,
    className = "",
  } = props;

  const handlePageChange = ({ selected }) => {
    onPageChange && onPageChange(selected);
  };
  const pageCount = Math.ceil(totalSize / sizePerPage);
  return (
    <ReactPaginate
      forcePage={initPage}
      pageCount={pageCount}
      pageRangeDisplayed={displayRanges}
      marginPagesDisplayed={marginPage}
      onPageChange={handlePageChange}
      containerClassName={`flex items-center text-md phone:text-lg text-neutral-3 border-neutral-3 ${className}`}
      previousLabel={
        <LabelWrapper>
          <i class="bx bx-chevron-left"></i>
        </LabelWrapper>
      }
      nextLabel={
        <LabelWrapper>
          <i class="bx bx-chevron-right"></i>
        </LabelWrapper>
      }
      previousLinkClassName="outline-none focus:outline-none"
      nextLinkClassName="outline-none focus:outline-none"
      pageLinkClassName="flex items-center justify-center mx-0.5 w-3 h-3 phone:w-4 phone:h-4 rounded border focus:outline-none hover:text-white hover:bg-primary"
      activeLinkClassName="text-white bg-primary focus:outline-none"
    />
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
  sizePerPage: PropTypes.number.isRequired,
  totalSize: PropTypes.number,
  displayRanges: PropTypes.number,
  marginPage: PropTypes.number,
  onPageChange: PropTypes.func,
  className: PropTypes.string,
  count: PropTypes.number,
};

export default Pagination;
