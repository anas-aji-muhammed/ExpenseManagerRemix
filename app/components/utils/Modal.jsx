
function Modal({ children, onClose }) {
  
  return (
    <div onClick={onClose} className="">
        <dialog open={true}
            className="rounded border-indigo-300 z-50 w-fit border-2 "
            onClick={(event) => event.stopPropagation()}
            >
            <div className="bg-primary-main h-8 w-full text-center align-middle	leading-8">
                <h1 className="text-white">Add Expense</h1>
            </div>
            {children}
        </dialog>

    </div>
  );
}

export default Modal;
