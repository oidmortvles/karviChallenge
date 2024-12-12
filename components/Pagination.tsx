import styles from "./Pagination.module.css";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({totalPages, currentPage, onPageChange}) => {
  return totalPages > 1 ? 
    (
        <div className={styles.pagination}>
            <button className={styles.buttonPagination} onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className={styles.icon}>
                <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
                </svg>
                Anterior
            </button>

            <div className={styles.numberPagination}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button key={index} className={ currentPage === index + 1 ? styles.activePage : styles.inactivePage} onClick={() => onPageChange(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>

            <button className={styles.buttonPagination} onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Siguiente
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className={styles.icon}>
                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                </svg>
            </button>
        </div>
    ) 
    : 
    null;
};

export default Pagination;
