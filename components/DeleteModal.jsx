import React from "react";
import { FiDelete } from "react-icons/fi";

const DeleteModal = ({ isOpen, onConfirm, onCancel, itemName }) => {
  if (!isOpen) return null;

  const deleteTask = async (id) => {
    try {
      const response = await axiosInstance.delete(`/${id}`);
      const { data } = response;
      if (response.status === 200) {
        toast.success(data.message);
        getAllTask();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={onCancel}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Task Delete</h3>
          <div className="flex flex-col  items-start gap-5">
            <p className="py-4">
              Are you sure you want to delete "{itemName}"? This action cannot
              be undone.
            </p>
            <button onClick={onConfirm}>
              <FiDelete size={30} color="red" />
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DeleteModal;
